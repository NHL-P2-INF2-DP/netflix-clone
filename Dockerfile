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
# Stage 3: Production server
FROM oven/bun:alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["sh", "-c", "bun start"]