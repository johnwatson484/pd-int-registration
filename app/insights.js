import appInsights from 'applicationinsights'

const setupAppInsights = () => {
  if (process.env.APP_INSIGHTS_CONNECTION_STRING) {
    appInsights.setup(process.env.APP_INSIGHTS_CONNECTION_STRING)
    appInsights.start()
  }
}

export { setupAppInsights }
