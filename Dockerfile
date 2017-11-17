FROM node
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 3000
RUN npm install
RUN npm install bower -g
RUN bower install --allow-root
CMD ["npm", "start"]
