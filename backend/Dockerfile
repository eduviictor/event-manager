FROM node:12.13.1-alpine

# Create Directory for the Container
WORKDIR /

COPY package.json .
RUN yarn

ADD . /

EXPOSE 3000