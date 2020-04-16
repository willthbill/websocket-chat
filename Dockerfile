FROM node:13.13.0
WORKDIR /usr/src/app
EXPOSE 1576
EXPOSE 8080
COPY . .
CMD [ "./run" ]
WORKDIR /usr/src/BE
RUN yarn install
WORKDIR /usr/src/FE
RUN yarn install