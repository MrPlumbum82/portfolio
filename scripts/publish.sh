#!/bin/bash
# Login in to push to docker hub
echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

# Push to docker hub with tag
docker push mrplum/portfolio:latest