FROM node:15

EXPOSE 8080

WORKDIR /app

RUN npm i npm@latest -g

COPY package.json package-lock.json* ./

RUN npm install && npm cache clean --force

COPY . .

CMD ["node", "index.js"]