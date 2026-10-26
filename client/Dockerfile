# Dockerfile

# Base image (Node 20 LTS; Node 16 reached end-of-life)
FROM node:26-slim

# Set working directory
WORKDIR /app

# Enable pnpm via corepack (ships with Node >=16.13)
RUN corepack enable

ENV HUSKY_SKIP_INSTALL=1

# Copy package.json, pnpm-lock.yaml and pnpm config
COPY package.json pnpm-lock.yaml .npmrc ./

# Install dependencies using the lockfile as-is
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy the rest of the app's source code
COPY . ./

# Expose port 3000
EXPOSE 3000

# Start the Vite dev server
CMD ["pnpm", "run", "start", "--host"]
