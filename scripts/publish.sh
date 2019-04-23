#!/bin/bash

# Bash Variables
# DOCKERHUB_USERNAME (env var)
# DOCKERHUB_PASSWORD (env var)
# DOCKERHUB_REPO (local)
# DOCKERHUB_TAG (local)

# Build Docker Image (assuming this script exists one dir deep)
docker build -t mrplum/portfolio ../.

# Login in to push to docker hub
echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

# Push to docker hub with tag
docker push mrplum/portfolio:latest