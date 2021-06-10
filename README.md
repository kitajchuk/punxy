punxy
=====

> your proxy to what the “hackers” call “news” and the latest freelance nets.

<img src="./public/punxy.png" width="100%" />

[![CircleCI Status](https://circleci.com/gh/kitajchuk/punxy.svg?style=shield)](https://app.circleci.com/pipelines/github/kitajchuk/punxy) [![Netlify Status](https://api.netlify.com/api/v1/badges/4f8a7746-1c64-4164-a1e7-1cb75c895a80/deploy-status)](https://app.netlify.com/sites/punxy/deploys)


# Jamstack

- [punxy.vercel.app](https://punxy.vercel.app)
- [punxy.netlify.app](https://punxy.netlify.app)

# AWS / CircleCI

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

# Docker / Kubernetes

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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). However, it is using [cra-preact](https://github.com/shilangyu/cra-preact) to generate Preact optimized Production builds which reduce the JavaScript payloads by half.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
