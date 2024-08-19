FROM node:18.9.0

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5174

CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--port", "5174"]