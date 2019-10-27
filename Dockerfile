# base image
FROM node:carbon-slim

# set working directory
WORKDIR /front

# install and cache app dependencies
COPY package.json /front/
RUN npm install -g @angular/cli

# add app
COPY .  /front

RUN npm install

CMD npm start
EXPOSE 4200