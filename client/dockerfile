FROM node:19-alpine as prod
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . .
CMD ["npm", "start"]