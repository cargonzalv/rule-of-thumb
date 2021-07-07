FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./pages /usr/src/app/pages
COPY ./public /usr/src/app/public
COPY ./utils /usr/src/app/utils
COPY next-env.d.ts .babelrc tsconfig.json .env .env.development .env.production /usr/src/app/

RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]