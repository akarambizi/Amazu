# Dockerfile

# Base image (Node 20 LTS; Node 16 reached end-of-life)
FROM node:26-slim

# Set working directory
WORKDIR /app

# Enable pnpm via corepack (ships with Node >=16.13)
RUN corepack enable

# Copy package.json, pnpm-lock.yaml and pnpm config
COPY package.json pnpm-lock.yaml .npmrc ./

# Install dependencies using the lockfile as-is
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy the rest of the app's source code
COPY . ./

# Build the app
RUN pnpm run build

# Expose port 5000
EXPOSE 5000

# Start the server
CMD ["pnpm", "run", "serve"]