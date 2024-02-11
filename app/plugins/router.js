import register from '../routes/register.js'

const routes = [].concat(
  register
)

const plugin = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}

export default plugin
