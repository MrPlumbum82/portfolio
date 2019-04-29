# FROM nginx:alpine
# COPY ./web /usr/share/nginx/html

FROM nginx:1.12-alpine
COPY ./web /usr/share/nginx/html
EXPOSE 9000
CMD ["nginx", "-g", "daemon off;"]