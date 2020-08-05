import example from '@/routes/example'
import koa from 'koa'

export default (app: koa<koa.DefaultState, koa.DefaultContext>): void => {
  app.use(example.routes())
  app.use(example.allowedMethods())
}
