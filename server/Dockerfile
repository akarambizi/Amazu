# Dockerfile

# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --ignore-scripts

# Copy the rest of the app's source code
COPY . ./

# Build the app
RUN yarn build

# Expose port 5000
EXPOSE 5000

# Start the server
CMD ["yarn", "serve"]