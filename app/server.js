import Hapi from '@hapi/hapi'
import Inert from '@hapi/inert'
import Vision from '@hapi/vision'
import Joi from 'joi'
import Blipp from 'blipp'
import Swagger from './plugins/swagger.js'
import Router from './plugins/router.js'
import Errors from './plugins/errors.js'
import Logging from './plugins/logging.js'

async function createServer () {
  const server = Hapi.server({
    port: 3000,
    routes: {
      validate: {
        options: {
          abortEarly: false
        }
      }
    },
    router: {
      stripTrailingSlash: true
    }
  })

  server.validator(Joi)
  await server.register([
    Inert,
    Vision,
    Swagger,
    Router,
    Errors,
    Logging,
    Blipp
  ])

  return server
}

export { createServer }
