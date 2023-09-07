# Using the latest version of the node.js image as the base image
FROM node:18

# Production mode when running
ENV NODE_ENV=production

# Create a working directory in the container
WORKDIR /app

# Copying the entire project into the working directory in the container
COPY . .

# Installing Node.js dependencies
RUN yarn install

# Port used
EXPOSE 8000

# The command to run the application when the container is started
CMD ["node", "restfull-api/index.js"]
