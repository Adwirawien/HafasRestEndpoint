FROM node:12.2.0-alpine
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000
EXPOSE 3001
CMD [ "node", "index.js" ]