FROM node:10.1.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -D
COPY . .
RUN npm run build&&cd clientIAPP
EXPOSE 8080
CMD ["node", "app.js"]