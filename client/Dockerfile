# Dockerfile

# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

ENV HUSKY_SKIP_INSTALL=1

# Install dependencies
RUN yarn install --ignore-scripts

# Copy the rest of your app's source code
COPY . ./

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]