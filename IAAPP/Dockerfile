FROM node:10.1.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -D
COPY . .
RUN npx tsc app.ts&&cd clientIAPP&&npm i -D&&ng build --prod
EXPOSE 8080
CMD ["node", "app.js"]