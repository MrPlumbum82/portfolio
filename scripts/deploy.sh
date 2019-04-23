#!/bin/bash
# Copy Prod YAML File to VPS (update the yml to pull from docker hub)
sshpass -p $VPS_PASSWORD scp -o stricthostkeychecking=no ./docker-compose.prod.yml $VPS_USERNAME@$VPS_IP:/opt/tmp/docker-compose-portfolio.yml

# SSH Login and Docker Login (I probably don't need to login, just pulling)
# sshpass -p $VPS_PASSWORD ssh -o StrictHostKeyChecking=no $VPS_USERNAME@$VPS_IP "echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin"

# Run Docker Compose
# sshpass -p $VPS_PASSWORD ssh -o StrictHostKeyChecking=no $VPS_USERNAME@$VPS_IP "docker-compose -f /opt/tmp/docker-compose-portfolio.yml up -d --force-recreate --no-deps --build"