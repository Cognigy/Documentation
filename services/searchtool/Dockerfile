FROM node:18

# create app dir:
WORKDIR /app

# install dependencies:
COPY package*.json /app/
RUN npm install

# bundle app source:
COPY ./dist/ /app/

# expose port to use the app:
EXPOSE 3000

# run the app:
CMD [ "node", "app.js" ]
