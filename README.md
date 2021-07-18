punxy
=====

> your proxy to what the “hackers” call “news” and the latest freelance nets.

<img src="./public/punxy.png" width="100%" />

[![CI](https://github.com/kitajchuk/punxy/actions/workflows/main.yml/badge.svg)](https://github.com/kitajchuk/punxy/actions/workflows/main.yml)
[![CircleCI Status](https://circleci.com/gh/kitajchuk/punxy.svg?style=shield)](https://app.circleci.com/pipelines/github/kitajchuk/punxy) [![Netlify Status](https://api.netlify.com/api/v1/badges/4f8a7746-1c64-4164-a1e7-1cb75c895a80/deploy-status)](https://app.netlify.com/sites/punxy/deploys)

## Stack

- [Create React App](https://github.com/facebook/create-react-app)
- [cra-preact](https://github.com/shilangyu/cra-preact)
- [Preact](https://preactjs.com/)

## Commands

- `yarn start`
- `yarn build`
- `yarn test`


## Jamstack

- [punxy.vercel.app](https://punxy.vercel.app)
- [punxy.netlify.app](https://punxy.netlify.app)

## Docker / k8s

[kitajchuk/punxy-docker](https://hub.docker.com/repository/docker/kitajchuk/punxy-docker)

```shell
# Builds docker image for punxy
docker build --tag kitajchuk/punxy-docker:latest .

# Publishes the latest image for punxy
docker push kitajchuk/punxy-docker:latest

# Runs a docker container for punxy image
docker run --detach --rm --name punxy-docker --publish 3000:80 kitajchuk/punxy-docker:latest

# Deploys punxy containers to k8s cluster
# You can just ping http://localhost to hit the app
kubectl apply -f deployment.yml
```
