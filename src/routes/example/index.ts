import register from '@/routes/example/demo'
import Router from 'koa-router'

const router: Router = new Router({
  prefix: '/example'
})

register(router)

export default router
