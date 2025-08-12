FROM node:latest

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY .env .env

RUN npm install

RUN curl -sfS https://dotenvx.sh/install.sh | sh

COPY . .

RUN dotenvx ext prebuild

EXPOSE 3000

CMD ["npm", "start"]