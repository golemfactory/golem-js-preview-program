# Use an official Python runtime as a parent image
FROM python:3.8-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file to the container
COPY requirements.txt ./

FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install


# Copy the rest of the application files to the container
CMD ["npm", "start"]

# Start the application


