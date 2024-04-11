# Use a base image with a web server installed, for example, Nginx
FROM nginx:alpine

# Copy your HTML, CSS, and JavaScript files into the container
COPY index.html /usr/share/nginx/html
COPY styles.css /usr/share/nginx/html
COPY script.js /usr/share/nginx/html

# Expose port 80 to allow external access
EXPOSE 80
