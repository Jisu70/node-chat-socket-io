#!/bin/bash

# Stop and remove previous container if exists
sudo docker stop node-chat || true
sudo docker rm node-chat || true

# Remove previous Docker image
sudo docker rmi node-chat-image || true

# Build Docker image from Dockerfile
sudo docker build -t node-chat-image .

# Run Docker container, mapping port 3000
sudo docker run -d -p 3000:3000 --name node-chat node-chat-image
