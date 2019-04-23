#!/bin/bash
# Copy Prod YAML File to VPS (update the yml to pull from docker hub)
sshpass -p $VPS_PASSWORD scp -o stricthostkeychecking=no ./docker-compose.prod.yml $VPS_USERNAME@$VPS_IP:/opt/tmp/docker-compose-portfolio.yml

# Run Docker Compose Down
sshpass -p $VPS_PASSWORD ssh -o StrictHostKeyChecking=no $VPS_USERNAME@$VPS_IP "docker-compose -f /opt/tmp/docker-compose-portfolio.yml down"

# Run Docker Pull
sshpass -p $VPS_PASSWORD ssh -o StrictHostKeyChecking=no $VPS_USERNAME@$VPS_IP "docker pull mrplum/portfolio:latest"

# Run Docker Compose Up
sshpass -p $VPS_PASSWORD ssh -o StrictHostKeyChecking=no $VPS_USERNAME@$VPS_IP "docker-compose -f /opt/tmp/docker-compose-portfolio.yml up -d"