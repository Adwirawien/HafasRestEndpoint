FROM node:12.2.0-alpine
WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000
EXPOSE 3001
CMD [ "node", "index.js" ]
