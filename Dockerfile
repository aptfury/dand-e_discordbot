FROM node:latest

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

RUN curl -sfS https://dotenvx.sh/install.sh | sh

COPY . .

RUN dotenvx ext prebuild

EXPOSE 3000
EXPOSE 10000

CMD ["dotenvx", "run", "--", "node", "src/app.js"]