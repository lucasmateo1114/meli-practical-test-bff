FROM node:20.15-alpine3.20

WORKDIR /app

COPY package*.json ./
COPY src ./src
COPY config ./config

RUN npm install

EXPOSE 80

CMD ["npm", "run", "start"]