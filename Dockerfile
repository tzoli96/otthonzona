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
FROM nginx:stable-alpine

# Copy SSL
COPY cert.pem /cert.pem
COPY key.pem /key.pem

# Setup Frontend
RUN apk add --update nodejs npm
COPY --from=builder /frontend/build /var/www/app
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Setup Backend
COPY --from=builder /backend /backend
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Set the working directory to /backend
WORKDIR /backend

# Setup networking
EXPOSE 80 443 5000

# Start Nginx and Backend
CMD nginx && /entrypoint.sh