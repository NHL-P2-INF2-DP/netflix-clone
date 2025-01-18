#!/bin/bash

BACKUP_DIR="/backups"
LATEST_BACKUP="$BACKUP_DIR/latest.sql"
POSTGRES_HOST="postgres"
POSTGRES_PORT="5432"

# Function to create a backup
create_backup() {
    echo "Creating database backup..."
    PGPASSWORD=$POSTGRES_PASSWORD pg_dump -h $POSTGRES_HOST -U $POSTGRES_USER -d $POSTGRES_DB \
        --clean \
        --if-exists \
        --no-owner \
        --no-privileges \
        --no-comments \
        --no-tablespaces \
        > $LATEST_BACKUP
    if [ $? -eq 0 ]; then
        echo "Backup created successfully at $(date)"
        # Create a timestamped copy
        cp $LATEST_BACKUP "$BACKUP_DIR/backup_$(date +%Y%m%d_%H%M%S).sql"
        # Keep only the last 5 backups
        ls -t $BACKUP_DIR/backup_* 2>/dev/null | tail -n +6 | xargs -r rm
    else
        echo "Backup failed at $(date)"
    fi
}

# Function to restore from backup
restore_from_backup() {
    if [ -f $LATEST_BACKUP ]; then
        echo "Found existing backup, checking if restore is needed..."
        
        # First terminate all connections and drop database (outside transaction)
        PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d postgres -c "
            SELECT pg_terminate_backend(pid) 
            FROM pg_stat_activity 
            WHERE datname = '$POSTGRES_DB'
            AND pid <> pg_backend_pid();
        "
        
        # Drop and create database (must be done outside transaction)
        PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d postgres -c "DROP DATABASE IF EXISTS $POSTGRES_DB;"
        PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d postgres -c "CREATE DATABASE $POSTGRES_DB;"
        
        echo "Restoring from backup..."
        # Remove transaction_timeout from the backup file before restoring
        sed '/transaction_timeout/d' $LATEST_BACKUP | PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d $POSTGRES_DB
        
        if [ $? -eq 0 ]; then
            echo "Database restored successfully at $(date)"
        else
            echo "Database restore failed at $(date)"
            return 1
        fi
    else
        echo "No backup file found at $LATEST_BACKUP"
    fi
}

# Main execution
echo "Starting backup service..."

# Wait for PostgreSQL to be ready
until PGPASSWORD=$POSTGRES_PASSWORD psql -h $POSTGRES_HOST -U $POSTGRES_USER -d postgres -c '\q' 2>/dev/null; do
    echo "Waiting for PostgreSQL to be ready..."
    sleep 5
done

# Initial restore attempt
if ! restore_from_backup; then
    echo "Initial restore failed, continuing with backup service"
fi

# Then start the backup loop
while true; do
    create_backup
    sleep ${BACKUP_INTERVAL:-14400}
done 