FROM node:lts-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE $PORT

CMD ["node", "app.js"]