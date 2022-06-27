## build stage
FROM node:16 AS builder

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

## run stage
FROM node:16

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --only=production

COPY --from=builder ./usr/src/app/dist .

EXPOSE 8080

CMD ["node", "server.js"]