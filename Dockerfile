FROM nginx:alpine

# Static site files
COPY index.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
