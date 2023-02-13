
FROM node:14.21-alpine3.16

WORKDIR /var/www/shopos-app

COPY package*.json ./

RUN apk add g++ make py3-pip

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]