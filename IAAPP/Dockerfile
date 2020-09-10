FROM node:10.1.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -D
COPY . .
EXPOSE 8080
RUN npm run jd
CMD ["node", "app.js"]