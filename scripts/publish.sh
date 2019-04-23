#!/bin/bash

# Bash Variables
# DOCKERHUB_USERNAME (env var) (update var name)
# DOCKERHUB_PASSWORD (env var) (update var name)
# DOCKERHUB_REPO (local) (create this)
# DOCKERHUB_TAG (local) (create this)

# Build Docker Image
docker build -t mrplum/portfolio .

# Login in to push to docker hub
echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

# Push to docker hub with tag
docker push mrplum/portfolio:latest