FROM node:9

WORKDIR /usr/share/app

RUN apt-get update && apt-get install nano
RUN npm install -g nodemon
RUN apt-get -y install libgtkextra-dev libgconf2-dev libnss3 libasound2 libxtst-dev libxss1

CMD ["npm", "start"]
