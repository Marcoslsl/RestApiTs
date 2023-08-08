# Use the official Node.js LTS image as base
FROM node:17.9.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

COPY .env /app/

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .


# Command to start your application
CMD ["npm", "run", "dev"]
