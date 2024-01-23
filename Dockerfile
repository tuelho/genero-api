ARG NODE_IMAGE=node:16.13.1-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /home/node/app && chown root:root /home/node/app
WORKDIR /home/node/app

FROM base AS dependencies
COPY --chown=root:root ./package*.json ./
RUN npm ci
COPY --chown=root:root . .

FROM dependencies AS build
RUN node ace build --production --ignore-ts-errors

FROM base AS production
ENV NODE_ENV=production
ENV PORT=$PORT
ENV HOST=0.0.0.0
COPY --chown=root:root ./package*.json ./
RUN npm ci --production
COPY --chown=root:root --from=build /home/node/app/build .
EXPOSE $PORT
CMD [ "dumb-init", "node", "server.js" ]
