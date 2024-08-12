import appInsights from 'applicationinsights'

const setupAppInsights = () => {
  if (process.env.APP_INSIGHTS_CONNECTION_STRING) {
    appInsights.setup(process.env.APP_INSIGHTS_CONNECTION_STRING)
    appInsights.start()
    const cloudRoleTag = appInsights.defaultClient.context.keys.cloudRole
    const appName = 'pd-int-registration'
    appInsights.defaultClient.context.tags[cloudRoleTag] = appName
  }
}

export { setupAppInsights }
