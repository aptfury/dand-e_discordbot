FROM node:latest

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY .gitignore .gitignore

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]