#!/bin/bash

BACKUP_DIR="/backups"
LATEST_BACKUP="$BACKUP_DIR/latest.sql"
POSTGRES_HOST="postgres"
POSTGRES_PORT="5432"

# Function to check if backup file has valid data
check_backup_validity() {
    if [ ! -f "$LATEST_BACKUP" ]; then
        echo "No backup file exists"
        return 1
    }

    # Check file size (greater than 1KB)
    if [ $(stat -f%z "$LATEST_BACKUP" 2>/dev/null || stat -c%s "$LATEST_BACKUP") -lt 1024 ]; then
        echo "Backup file is too small, likely empty or corrupted"
        return 1
    }

    # Check if file contains actual SQL commands
    if ! grep -q 'CREATE TABLE\|INSERT INTO' "$LATEST_BACKUP"; then
        echo "Backup file doesn't contain valid SQL commands"
        return 1
    }

    return 0
}

# Function to check if database is empty
check_database_empty() {
    local table_count=$(PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d $POSTGRES_DB -tAc "
        SELECT COUNT(*) FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
    ")
    
    if [ "$table_count" -eq "0" ]; then
        return 0  # Database is empty
    else
        local row_count=$(PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d $POSTGRES_DB -tAc "
            SELECT COUNT(*) FROM \"Genre\"
        ")
        if [ "$row_count" -eq "0" ]; then
            return 0  # Database has tables but no data
        fi
    fi
    return 1  # Database has data
}

# Function to create a backup
create_backup() {
    # Only create backup if database has data
    if ! check_database_empty; then
        echo "Creating database backup..."
        PGPASSWORD=$POSTGRES_PASSWORD pg_dump -h $POSTGRES_HOST -U $POSTGRES_USER -d $POSTGRES_DB \
            --clean \
            --if-exists \
            --no-owner \
            --no-privileges \
            --no-comments \
            --no-tablespaces \
            > $LATEST_BACKUP

        if [ $? -eq 0 ] && [ -s "$LATEST_BACKUP" ]; then
            echo "Backup created successfully at $(date)"
            cp $LATEST_BACKUP "$BACKUP_DIR/backup_$(date +%Y%m%d_%H%M%S).sql"
            ls -t $BACKUP_DIR/backup_* 2>/dev/null | tail -n +6 | xargs -r rm
        else
            echo "Backup failed at $(date)"
            rm -f $LATEST_BACKUP
        fi
    else
        echo "Database is empty, skipping backup"
    fi
}

# Function to restore from backup
restore_from_backup() {
    if check_backup_validity; then
        echo "Valid backup found, attempting restore..."
        
        # Terminate existing connections
        PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d postgres -c "
            SELECT pg_terminate_backend(pid) 
            FROM pg_stat_activity 
            WHERE datname = '$POSTGRES_DB'
            AND pid <> pg_backend_pid();"
        
        # Drop and recreate database
        PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d postgres -c "DROP DATABASE IF EXISTS $POSTGRES_DB;"
        PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d postgres -c "CREATE DATABASE $POSTGRES_DB;"
        
        echo "Restoring from backup..."
        sed '/transaction_timeout/d' $LATEST_BACKUP | PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d $POSTGRES_DB
        
        if [ $? -eq 0 ]; then
            echo "Database restored successfully at $(date)"
            return 0
        else
            echo "Database restore failed at $(date)"
            return 1
        fi
    else
        echo "No valid backup found to restore from"
        return 1
    fi
}

# Main execution
echo "Starting backup service..."

# Wait for PostgreSQL to be ready
until PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d postgres -c '\q' 2>/dev/null; do
    echo "Waiting for PostgreSQL to be ready..."
    sleep 5
done

# Initial check and restore if needed
if check_database_empty && check_backup_validity; then
    echo "Database is empty and valid backup exists, attempting restore..."
    restore_from_backup
else
    echo "Database has data or no valid backup exists, continuing with normal operation..."
fi

# Start the backup loop
while true; do
    create_backup
    sleep ${BACKUP_INTERVAL:-14400}
done 