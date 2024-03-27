FROM nginx:1.11-alpine

COPY ./Frontend/index.html /usr/share/nginx/html/Frontend/
COPY ./Backend/script.js /usr/share/nginx/html/Backend/

# nginx -g daemon off;
CMD ["nginx", "-g", "daemon off;"]