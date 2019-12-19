FROM node:latest

RUN mkdir /front
WORKDIR /front

RUN npm install -g @angular/cli

COPY . /front/

RUN npm install

CMD ng serve --host 0.0.0.0 