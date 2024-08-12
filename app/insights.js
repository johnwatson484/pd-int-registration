import appInsights from 'applicationinsights'

const setupAppInsights = () => {
  if (process.env.APP_INSIGHTS_CONNECTION_STRING) {
    appInsights.setup(process.env.APP_INSIGHTS_CONNECTION_STRING)
      .setAutoCollectConsole(true, true)
      .start()
    const cloudRoleTag = appInsights.defaultClient.context.keys.cloudRole
    appInsights.defaultClient.context.tags[cloudRoleTag] = 'pd-int-registration'
    console.log('Application Insights enabled')
  }
}

export { setupAppInsights }
