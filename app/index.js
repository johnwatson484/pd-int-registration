import 'log-timestamp'
import { createServer } from './server.js'
import { setupAppInsights } from './insights.js'

const init = async () => {
  await setupAppInsights()
  const server = await createServer()
  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
