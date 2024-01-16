# backend/Dockerfile
FROM node:21-alpine as builder

WORKDIR /backend

COPY package*.json ./

RUN apk add --update nodejs npm yarn

RUN npm install

EXPOSE 5000

