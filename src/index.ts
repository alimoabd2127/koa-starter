import { errorLog, infoLog } from '@/config/winston'
import mountRoutes from '@/routes'
import cors from '@koa/cors'
import koa from 'koa'
import bodyparser from 'koa-bodyparser'
import helmet from 'koa-helmet'
import logger from 'koa-logger'
import ratelimit from 'koa-ratelimit'
import stripAnsi from 'strip-ansi'

const port = 4000
const app = new koa()
const db = new Map()
app.use(helmet())
app.use(cors())
// switch to the redis driver on a production setup
app.use(
  ratelimit({
    driver: 'memory',
    db,
    duration: 60000,
    errorMessage: 'Sometimes you just have to slow down',
    id: (ctx) => ctx.ip,
    headers: {
      remaining: 'Rate-Limit-Remaining',
      reset: 'Rate-Limit-Reset',
      total: 'Rate-Limit-Total'
    },
    max: 100,
    disableHeader: false
  })
)
app.use(bodyparser())
app.use(
  logger((str, _args: string[]) => {
    const logString = stripAnsi(str).trim()
    console.info(logString)
    infoLog.info(logString)
  })
)
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    const logString = stripAnsi(err.message).trim()
    console.error(logString)
    errorLog.error(logString)
  }
})

mountRoutes(app)
app.listen(port)
