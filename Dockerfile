# Stage 1: Install dependencies
FROM oven/bun:alpine AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install

# Stage 2: Build the application
FROM oven/bun:alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN bun run build
COPY src/scripts/init.ts /app/scripts/init.ts 

# Stage 3: Production server
FROM oven/bun:alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/scripts/init.ts ./init.ts
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/prisma/migrations ./migrations

EXPOSE 3000

# Compile (if necessary) and execute the init script, then start the server
CMD ["sh", "-c", "bun start"]