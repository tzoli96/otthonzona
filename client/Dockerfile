# backend/Dockerfile
FROM node:21-alpine as builder

WORKDIR /frontend
COPY package*.json .

COPY . .
RUN npm install --force
RUN npm run build

EXPOSE 3000

