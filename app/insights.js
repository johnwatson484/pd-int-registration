import appInsights from 'applicationinsights'
import { getConfig } from './config.js'

const setupAppInsights = async () => {
  const config = await getConfig()
  if (config.APP_INSIGHTS_CONNECTION_STRING) {
    appInsights.setup(config.APP_INSIGHTS_CONNECTION_STRING)
    appInsights.start()
  }
}

export { setupAppInsights }
