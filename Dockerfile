FROM node:16-slim as base

WORKDIR /code

COPY package*.json ./

FROM base as test
RUN npm ci
COPY . .
RUN npm run test

FROM base as prod
ENV NODE_ENV=production
RUN npm ci --production
COPY . .
CMD npm run start