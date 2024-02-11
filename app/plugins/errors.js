import Boom from '@hapi/boom'

const plugin = {
  plugin: {
    name: 'errors',
    register: (server, options) => {
      server.ext('onPreResponse', (request, h) => {
        const response = request.response

        if (response.isBoom) {
          const statusCode = response.output.statusCode

          if (statusCode === 404) {
            return Boom.notFound('The requested resource could not be found')
          }

          request.log('error', {
            statusCode,
            message: response.message,
            stack: response.data?.stack ?? response.stack
          })

          return Boom.boomify(response, { statusCode: 500 })
        }
        return h.continue
      })
    }
  }
}

export default plugin
