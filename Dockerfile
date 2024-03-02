FROM node:21-alpine as builder

# Build Frontend
WORKDIR /frontend
COPY client/. .
RUN yarn
RUN yarn build

# Build Backend
WORKDIR /backend
COPY server/package*.json .
RUN npm install
COPY server/. .

# Stage 2: Setup runtime for both frontend and backend
FROM nginxinc/nginx-unprivileged:stable-alpine

# Copy SSL
COPY cert.pem /cert.pem
COPY key.pem /key.pem

# Setup Frontend
COPY --from=builder /frontend/build /var/www/app
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Setup Backend
COPY --from=builder /backend /backend
COPY entrypoint.sh /entrypoint.sh

# Install Node.js and npm for backend
USER root
RUN apk add --update nodejs npm
RUN apk --no-cache add shadow
RUN groupmod -g 74966 nginx && usermod -u 74966 -g 74966 nginx
RUN chown -R nginx:nginx /backend /usr/share/nginx/html /cert.pem /key.pem /entrypoint.sh
RUN chmod +x /entrypoint.sh

USER nginx

# Set the working directory to /backend
WORKDIR /backend

# Setup networking
EXPOSE 8080 5000

# Start Nginx and Backend
CMD sh -c "nginx && /entrypoint.sh"