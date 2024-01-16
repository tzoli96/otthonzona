# backend/Dockerfile
FROM node:21-alpine as builder

WORKDIR /backend

COPY package*.json ./backend

RUN apk add --update nodejs npm yarn

RUN npm install

EXPOSE 5000

