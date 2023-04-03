FROM node:16.20.0-alpine

RUN apk update && apk upgrade && apk --no-cache add curl=7.88.1-r1 && apk --no-cache add tini=0.19.0-r1

ENTRYPOINT ["/sbin/tini", "--"]

EXPOSE 80

# Create app directory
WORKDIR /usr/src/app

#HEALTHCHECK --interval=10s --timeout=5s --retries=15 CMD curl -f http://localhost/ || exit 1
#HEALTHCHECK --interval=10s --timeout=5s --retries=15 CMD curl -f http://localhost/health200 || {>&2 echo failed health && exit 1;}
# Do not know if this was cause, ECS tasks would be SIGTERMed. Trying to figure out why...
# Use CMD here because of
HEALTHCHECK --interval=1s --timeout=200ms --retries=15 --start-period=1s CMD curl -f http://localhost/health200c || {>&2 echo failed health && exit 1;}

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

CMD [ "node", "index.js" ]
