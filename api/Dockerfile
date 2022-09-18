FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Since our Node.js app is listening on port 8080 we map it "out"
EXPOSE 8080

CMD [ "node", "server.js" ]