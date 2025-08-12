FROM node:latest
WORKDIR /src

RUN npm install --omit=dev
RUN curl -sfS https://dotenvx.sh/install.sh | sh

COPY . .
EXPOSE 3000

RUN dotenvx ext prebuild

CMD ["node", "./src/app.js"]