FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./ ./
RUN pwd
RUN ls
# ENV PORT=9001
# EXPOSE 9001
CMD [ "npm", "start" ]