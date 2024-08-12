import { DefaultAzureCredential } from '@azure/identity'
import { AppConfigurationClient, parseSecretReference } from '@azure/app-configuration'
import { parseKeyVaultSecretIdentifier, SecretClient } from '@azure/keyvault-secrets'

const config = {}

const getConfig = async (refresh = true) => {
  if (!refresh) {
    return config
  }

  const credential = new DefaultAzureCredential({ managedIdentityClientId: process.env.MANAGED_IDENTITY_CLIENT_ID })
  const appConfigClient = new AppConfigurationClient(process.env.APP_CONFIG_ENDPOINT, credential)

  const serviceName = await appConfigClient.getConfigurationSetting({ key: 'pd-int-registration-service-name' })
  const serviceSecret = await appConfigClient.getConfigurationSetting({ key: 'pd-int-registration-service-secret' })
  const appInsightsConnectionString = await appConfigClient.getConfigurationSetting({ key: 'pd-int-app-insights-connection-string' })

  const { name: secretName, vaultUrl } = parseKeyVaultSecretIdentifier(parseSecretReference(serviceSecret).value.secretId)
  const keyVaultClient = new SecretClient(vaultUrl, credential)
  const secret = await keyVaultClient.getSecret(secretName)

  config.SERVICE_NAME = serviceName.value || process.env.SERVICE_NAME || 'Registration'
  config.SERVICE_SECRET = secret.value || process.env.SERVICE_SECRET || 'Secret'
  config.APP_INSIGHTS_CONNECTION_STRING = appInsightsConnectionString.value

  return config
}

export { getConfig }
