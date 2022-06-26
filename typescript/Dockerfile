FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm ci --only=production

RUN npm run build

COPY ./dist .

EXPOSE 8080

CMD ["node", "server.js"]