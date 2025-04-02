FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build-prod

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run"]
