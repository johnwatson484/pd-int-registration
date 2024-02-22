import Joi from 'joi'
import Boom from '@hapi/boom'
import config from '../config.js'

export default [{
  method: 'GET',
  path: '/registration/{id}',
  options: {
    tags: ['api'],
    description: 'Get registration by ID',
    validate: {
      params: {
        id: Joi.string().required()
      },
      failAction: (request, h, err) => {
        return Boom.badRequest('Please provide a valid ID')
      }
    }
  },
  handler: (request, h) => {
    return h.response(`Registration details for ${request.params.id} from ${config.SERVICE_NAME} service with secret ${config.SERVICE_SECRET}`)
  }
}, {
  method: 'POST',
  path: '/registration',
  options: {
    tags: ['api'],
    description: 'Create registration',
    validate: {
      payload: {
        name: Joi.string().required()
      },
      failAction: (request, h, err) => {
        return Boom.badRequest('Please provide a valid payload')
      }
    }
  },
  handler: (request, h) => {
    return h.response(`Registration successful for ${request.payload.name}`)
  }
}, {
  method: 'PUT',
  path: '/registration/{id}',
  options: {
    tags: ['api'],
    description: 'Update registration',
    validate: {
      params: {
        id: Joi.string().required()
      },
      payload: {
        name: Joi.string().required()
      },
      failAction: (request, h, err) => {
        return Boom.badRequest('Please provide a valid payload')
      }
    }
  },
  handler: (request, h) => {
    return h.response(`Registration details updated for ${request.params.id}`)
  }
}, {
  method: 'PATCH',
  path: '/registration/{id}',
  options: {
    tags: ['api'],
    description: 'Partially update registration',
    validate: {
      params: {
        id: Joi.string().required()
      },
      payload: {
        name: Joi.string().required()
      },
      failAction: (request, h, err) => {
        return Boom.badRequest('Please provide a valid payload')
      }
    }
  },
  handler: (request, h) => {
    return h.response(`Registration details updated for ${request.params.id}`)
  }
}, {
  method: 'DELETE',
  path: '/registration/{id}',
  options: {
    tags: ['api'],
    description: 'Delete registration',
    validate: {
      params: {
        id: Joi.string().required()
      },
      failAction: (request, h, err) => {
        return Boom.badRequest('Please provide a valid ID')
      }
    }
  },
  handler: (request, h) => {
    return h.response(`Registration details for ${request.params.id} deleted`)
  }
}]
