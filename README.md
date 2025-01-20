🚀 This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚧 Getting Started

To deploy this project using Docker Compose, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/NHL-P2-INF2-DP/netflix-clone.git
cd netflix-clone
```

2. Copy the .env.example file to .env and update the environment variables as needed:

```bash
cp .env.example .env
```

3. Start the Docker containers:

```bash
docker-compose up --build
```

The application and the PostgreSQL database will now be running. The application will be accessible at [http://localhost:3000](http://localhost:3000).

Open [http://localhost:3000/api/v1/documentation](http://localhost:3000/api/v1/documentation) with your browser to see the full documentation for all the routes. (build on top of the OpenAPI specification)

## Default Login Credentials

You will be able to login with the following credentials:

- Email: `junior@demo.com`
- Password: `password123`
- Role: `Junior`

---

- Email: `medior@demo.com`
- Password: `password123`
- Role: `Medior`

---

- Email: `senior@demo.com`
- Password: `password123`
- Role: `Senior`

---

## 🚀 Extra Libraries used

- [@tanstack/react-query](https://tanstack.com/query/v5) - Fetching data on the client
- [@tanstack/react-table](https://tanstack.com/table) - Table component
- [zod](https://zod.dev/) - Validation
- [ShadCN](https://shadcn.com/) - UI components
- [better-auth](https://better-auth.com/) - Authentication
- [prisma](https://prisma.io/) - Database ORM
- [pino](https://github.com/pinojs/pino) - Logging
- [scalar](https://scalar.com/) - Documentation

## 🚧 Commit Message Guidelines

This project follows a specific commit message format. Please use one of the following types:

- `ci`: Changes to CI configuration files and scripts
- `chore`: Maintenance tasks, such as updating dependencies or fixing code style
- `docs`: Changes to documentation
- `ticket`: Changes related to a specific ticket or issue
- `feat`: New features or functionality
- `fix`: Bug fixes
- `perf`: Performance improvements
- `refactor`: Code refactoring
- `revert`: Reverting previous changes
- `style`: Changes to code style or formatting

you wont be able to commit without a type, so make sure to add one.

## 🚨 Quirks

- To add new env variables, add them to the `.env.example` file and head over to `@/lib/env.ts` to add them to the `EnvSchema`. this will allow you to access them in your app in a type-safe manner.

## Documentation

The ERD for this project can be found in the [documentation/erd.md](https://github.com/NHL-P2-INF2-DP/netflix-clone/tree/main/documentation/erd.md) file.

The routes for this project can be found in the [documentation/routes.md](https://github.com/NHL-P2-INF2-DP/netflix-clone/tree/main/documentation/routes.md) file.

The class-diagram for this project can be found in the [documentation/class-diagram.md](https://github.com/NHL-P2-INF2-DP/netflix-clone/tree/main/documentation/class-diagram.md) file.

## 🔄 Database Backup System

The project includes an automatic backup system for the PostgreSQL database.

### Automatic Backups
- Backups are created automatically every 4 hours
- The system keeps the last 5 backups plus a `latest.sql` file
- Backups are stored in the `./backups` directory

### Manual Operations
You can manually trigger backup and restore operations:

```bash
# Create a backup
docker-compose exec -T backup-service ./backup-service.sh create_backup

# Restore from latest backup
docker-compose exec -T backup-service ./backup-service.sh restore_from_backup
```


The `-T` flag makes the command run non-interactively (returns to prompt after completion).

### Backup Files
- Latest backup: `./backups/latest.sql`
- Timestamped backups: `./backups/backup_YYYYMMDD_HHMMSS.sql`

### Important Notes
- The backup service runs automatically in the background
- Manual operations don't interrupt the automatic backup schedule
- Restoring will completely replace the current database with the backup
- Make sure to backup before any major changes
- Database restoration only occurs when manually triggered with the restore command
