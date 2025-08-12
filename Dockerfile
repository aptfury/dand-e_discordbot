FROM node:latest
EXPOSE 3000
WORKDIR /src
COPY . .
RUN npm install --omit=dev
CMD ["node", "./src/app.js"]