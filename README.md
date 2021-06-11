punxy
=====

> your proxy to what the “hackers” call “news” and the latest freelance nets.

<img src="./public/punxy.png" width="100%" />

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

## AWS / CircleCI

- [punxy.kitajchuk.com](https://punxy.kitajchuk.com)
- [S3 Bucket](http://punxy.kitajchuk.com.s3-website-us-west-2.amazonaws.com)
- [S3+CloudFront+SSL](https://punxy.kitajchuk.com)
  - Using AWS Certificate Manager
  - Using [CircleCI](https://circleci.com) for CI/CD
    - Required env vars for the project:
      - `S3_BUCKET`
      - `DISTRIBUTION_ID`
      - `AWS_ACCESS_KEY_ID`
      - `AWS_SECRET_ACCESS_KEY`
      - `AWS_REGION`
    - Using [aws-s3 orb](https://circleci.com/developer/orbs/orb/circleci/aws-s3)
    - Using [aws-cloudfront orb](https://circleci.com/developer/orbs/orb/topmonks/aws-cloudfront)

Deploy to S3 bucket with AWS CLI from a local machine. Environment variables stored in `.env.punxy` exposed with `env-cmd`.

```shell
# Build the static React app
yarn build

# S3_BUCKET={bucket}
# DISTRIBUTION_ID={id}
yarn deploy
```

## Docker / Kubernetes

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
