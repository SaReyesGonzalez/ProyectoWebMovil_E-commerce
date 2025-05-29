FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

RUN npx prisma generate

RUN yarn add -D ts-node tsconfig-paths

EXPOSE 3000

CMD ["yarn", "start:dev"]