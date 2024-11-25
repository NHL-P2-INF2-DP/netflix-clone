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
- [zod](https://zod.dev/) - Validation
- [ShadCN](https://shadcn.com/) - UI components

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
