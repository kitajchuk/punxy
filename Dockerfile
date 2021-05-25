# Build image (needs python for yarn install)
# FROM node:alpine as build
FROM nikolaik/python-nodejs:latest as build

# Set working directory
WORKDIR /app

# Add the node_modules folder to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json file to /app directory for installation prep
COPY ./package.json /app

# Install dependencies
RUN yarn install

# Copy everything to /app directory
COPY . /app

# Build the app (with react-scripts)
RUN yarn build

# Build the final image using a nginx web server
# Distribution and copy the react build files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy the app build (generated with "yarn build")
COPY ./build /usr/share/nginx/html

# Needed this to make React Router work properly 
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d

# Expose port 80 for HTTP Traffic 
EXPOSE 80

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]