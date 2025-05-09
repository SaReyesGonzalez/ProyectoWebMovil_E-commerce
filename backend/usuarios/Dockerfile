FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN npx prisma generate
RUN yarn start:dev
EXPOSE 3000
CMD ["node", "dist/main"]