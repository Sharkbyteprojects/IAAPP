FROM node:10.1.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i -D
COPY . .
RUN npm install -g @angular/cli
RUN cd clientIAPP&&npm i -D&&npx ng build --prod
EXPOSE 8080
CMD ["node", "app.js"]
