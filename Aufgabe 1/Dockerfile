FROM nginx:1.11-alpine

RUN echo 'Hallo aus dem Image'

COPY TestWebSite/index.html /usr/share/nginx/html

EXPOSE 80

# nginx -g daemon off;
CMD ["nginx", "-g", "daemon off;"]