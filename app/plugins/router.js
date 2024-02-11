import registration from '../routes/registration.js'

const routes = [].concat(
  registration
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
