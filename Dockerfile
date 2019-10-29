FROM node:latest

RUN mkdir /front
WORKDIR /front

RUN npm install -g @angular/cli

COPY . /front/

RUN npm install

