# Use the official Node.js 14 base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose the port on which your application runs
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

#  Create a file named Dockerfile in the root directory of your project.
#   Copy the above Dockerfile code into the Dockerfile.
#  Open a terminal and navigate to the root directory of your project.
# Build the Docker image by running the following command: docker build -t your-image-name . (replace your-image-name with the desired name for your Docker image).
# Once the image is built, you can run a container using the image with the following command: docker run -p 8000:8000 -d your-image-name (replace your-image-name with the name you used in the previous step).
# Your backend application should now be running in a Docker container, accessible on http://localhost:8000.
