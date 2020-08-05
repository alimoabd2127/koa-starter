import { verifyModelMiddleware } from '@/utils'
import Joi from 'joi'
import Router from 'koa-router'

const schema = Joi.object({
  param: Joi.string().required()
})

interface reqBody {
  param?: number
}

export default async (router: Router): Promise<void> => {
  router.post('/demo', verifyModelMiddleware(schema), async (ctx) => {
    const body = ctx.request.body as reqBody

    ctx.response.body = 'You sent: ' + body.param

    ctx.response.status = 200
  })

  router.get('/demo', verifyModelMiddleware(schema), async (ctx) => {
    ctx.response.body = 'Hello World!'
    ctx.response.status = 200
  })
}
