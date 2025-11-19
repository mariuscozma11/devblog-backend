FROM node:20

WORKDIR /app

COPY package.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 3000

RUN pnpm run migration:run

CMD ["pnpm", "run", "start:dev"]