# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local package files to the container
COPY . .

# Start the Vite dev server
CMD ["npm", "run", "dev"]
