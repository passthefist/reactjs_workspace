FROM node:20 as reactjs_server
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .