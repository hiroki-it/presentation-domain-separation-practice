FROM node:22.11.0-bookworm-slim

WORKDIR .

COPY package.json yarn.lock ./

RUN yarn install

CMD ["yarn", "dev"]
