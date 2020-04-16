FROM node:13.13.0
WORKDIR /usr/src/app
EXPOSE 1576
EXPOSE 8080
COPY . .
WORKDIR /usr/src/app/BE
RUN npm install
WORKDIR /usr/src/app/FE
RUN npm install
WORKDIR /usr/src/app
RUN chmod +x ./run
CMD [ "./run" ]