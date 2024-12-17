🚀 This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚧 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤔 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## 🚀 Extra Libraries used

- [@tanstack/react-query](https://tanstack.com/query/v5) - Fetching data on the client
- [@tanstack/react-table](https://tanstack.com/table) - Table component
- [zod](https://zod.dev/) - Validation
- [ShadCN](https://shadcn.com/) - UI components
- [better-auth](https://better-auth.com/) - Authentication
- [prisma](https://prisma.io/) - Database ORM
- [pino](https://github.com/pinojs/pino) - Logging

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

## Deployment

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
docker-compose up
```

The application and the PostgreSQL database will now be running. The application will be accessible at [http://localhost:3000](http://localhost:3000).
