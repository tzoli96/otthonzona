#!/bin/sh

echo RUN prisma generate
npx prisma generate

echo RUN prisma db push
npx prisma db push

echo Start backend
npm start server.js