FROM node:12.0.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
RUN npm i -g typescript
RUN npm install -g @angular/cli
RUN npm i -g @types/node
COPY . .
RUN tsc app.ts&&cd clientIAPP&&npm i -D&&ng build --prod
EXPOSE 8081
EXPOSE 8080
CMD ["node", "app.js"]
