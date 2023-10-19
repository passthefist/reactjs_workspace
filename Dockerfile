FROM node:8 as reactjs_server
WORKDIR /app
COPY . ./   
RUN yarn

EXPOSE 5000
RUN yarn build

CMD ["yarn", "serve"]