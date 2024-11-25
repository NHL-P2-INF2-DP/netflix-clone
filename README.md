This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Extra Libraries used

- [@tanstack/react-query](https://tanstack.com/query/v5) - Fetching data
- [zod](https://zod.dev/) - Validation

## Quirks

- To add new env variables, add them to the `.env.example` file and head over to `@/lib/env.ts` to add them to the `EnvSchema`. this will allow you to access them in your app in a type-safe manner.

## Documentation

The ERD for this project can be found in the [documentation/erd.md](https://github.com/NHL-P2-INF2-DP/netflix-clone/tree/main/documentation/erd.md) file.

The routes for this project can be found in the [documentation/routes.md](https://github.com/NHL-P2-INF2-DP/netflix-clone/tree/main/documentation/routes.md) file.

## Deployment

To deploy this project using Docker Compose, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/netflix-clone.git
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
