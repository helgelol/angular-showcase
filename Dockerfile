FROM nginx

# Copy dist folder to replace the nginx default contents
COPY ./dist/angular-showcase /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80