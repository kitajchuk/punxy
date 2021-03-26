punxy
=====

> your proxy to what the “hackers” call “news” and the latest freelance nets.

<img src="./public/punxy.png" width="100%" />

# Jamstack

- [punxy.vercel.app](https://punxy.vercel.app/)
- [punxy.netlify.app](https://punxy.netlify.app/)

# AWS

```shell
# Build the static React app
yarn build

# Deploy to S3 bucket with AWS CLI
# Environment variables stored in .env.punxy
# S3_BUCKET={bucket}
# DISTRIBUTION_ID={id}
yarn deploy-s3
```

- [S3 Bucket](http://punxy.kitajchuk.com.s3-website-us-west-2.amazonaws.com/)
- [S3+CloudFront+SSL](https://punxy.kitajchuk.com)
  - Using AWS Certificate Manager

# Docker / Kubernetes

[kitajchuk/punxy-docker](https://hub.docker.com/repository/docker/kitajchuk/punxy-docker)

```shell
# Build docker image for punxy
docker build -t punxy-docker .

# Run a docker container for punxy image
docker run -dp 3000:80  punxy-docker:latest

# Deploy punxy containers to docker kubernetes cluster
kubectl apply -f deployment.yml

# Verify deployment
kubectl get deployment

# Verify the pods
kubectl get pods

# Verify the App is working in the cluster
kubectl port-forward deployment/punxy-docker 8080:80

# Verify kubernetes auto-healing
# Get a pod name from `kubectl get pods`
kubectl delete pod/punxy-docker-xxxxxxxxxx-xxxxx

# Watch deployment add a new pod back
kubectl get deployment --watch

# Output will be something like this at first:
# NAME           READY   UP-TO-DATE   AVAILABLE   AGE
# punxy-docker   1/2     2            1           6h41m

# And will resolve to something like this since we specify 2 replicas:
# NAME           READY   UP-TO-DATE   AVAILABLE   AGE
# punxy-docker   1/2     2            1           6h41m
# punxy-docker   2/2     2            2           6h41m
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
