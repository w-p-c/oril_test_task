FROM ubuntu:22.04

RUN apt-get update > /dev/null

RUN apt-get --assume-yes install curl bash git > /dev/null

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

WORKDIR /usr/src/app

# Install npm dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

CMD ./scripts/app_command.sh
