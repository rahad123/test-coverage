FROM node:16.14.2-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .

EXPOSE 3000
CMD ["node",  "server.js","--exp-backoff-restart-delay=100", "--time"]
