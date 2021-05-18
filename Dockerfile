FROM nginx:alpine

# Copy the app build (generated with "yarn build")
COPY ./build /usr/share/nginx/html

# Needed this to make React Router work properly 
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/default.conf /etc/nginx/conf.d

# Expose port 80 for HTTP Traffic 
EXPOSE 80

# Start the nginx web server
CMD ["nginx", "-g", "daemon off;"]