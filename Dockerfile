FROM node:latest

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

RUN curl -sfS https://dotenvx.sh/install.sh | sh

COPY . .

RUN dotenvx ext prebuild

EXPOSE 8080

CMD ["npm", "start"]