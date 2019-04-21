#!/bin/bash
# Copy Prod YAML File to VPS (update the yml to pull from docker hub)
sshpass -p $VPS_PASSWORD scp ./docker-compose.prod.yml $VPS_USER@$VPS_IP:/root/tmp/docker-compose-portfolio.yml

# SSH Login
sshpass -p $VPS_PASSWORD ssh $VPS_USER@$VPS_IP

# Docker Login 
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

# Run Docker Compose
echo "ALMOST DONE BOIS!"
pwd
# docker-compose -f docker-compose-portfolio.yml up -d