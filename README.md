# AWS Message Server

A NodeJS server starter with nicely organized routes, utils, logging, and error handling using Koa.
Has full typescript support with ts-node and ts-node-dev.

|Feature|Package|
|-|-|
|Logger|[Winston](https://github.com/winstonjs/winston) + [koa-logger](https://github.com/koajs/logger)|
|JWT Verification|[koa-jwt](https://github.com/koajs/jwt)|
|Routing|[koa-router](https://github.com/koajs/router)|
|Rate-Limiting|[koa-ratelimit](https://github.com/koajs/ratelimit) + [ioredis](https://github.com/luin/ioredis)|
|CORS|[@koa/cors](https://github.com/koajs/cors)|
|Schema Verification|[joi](https://github.com/sideway/joi)|
|HTTP Client|[axios](https://github.com/axios/axios)|

Has Prettier and Eslint preinstalled.

Please user the Dockerfile to create a container.

See [here](https://github.com/alimoabd2127/AWSMessageServer) for a more advanced example.

## Build Setup

```bash
# create or modify the existing .env file with your environment variables
# docker can either be linked the file or you can pass them with the -e argument
ENV_VAR=myEnvironmentVariable

# install dependencies
$ npm install

# serve with hot reload at localhost:4000
$ npm run dev

# launch production server
$ npm run start
```
