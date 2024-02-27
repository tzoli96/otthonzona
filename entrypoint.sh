#!/bin/sh

echo "RUN prisma generate"
npx prisma generate

echo "RUN prisma db push"
npx prisma db push

echo "Start backend"
npm start server.js &
echo "Backend started"

# Wait for the backend to start before starting Nginx
while ! nc -z localhost 5000; do
  sleep 1
done

# Start Nginx
nginx -g "daemon off;"
