import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    viewportWidth: 2560,
    viewportHeight: 1440,
    watchForFileChanges: false,
    baseUrl: process.env.baseUrl,
    defaultCommandTimeout: 25000,
    specPattern: ['cypress/system/e2e/specs/*.spec.ts'],
    numTestsKeptInMemory: 0,
    setupNodeEvents(on, config) {
      switch (process.env.ENVIRONMENT) {
        case 'prod': {
          config.baseUrl = config.env.prod.baseUrl
          break
        }
        case 'dev': {
          config.baseUrl = config.env.dev.baseUrl
          break
        }
        default: {
          config.baseUrl = config.env.dev.baseUrl
        }
      }
      return config
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/pipeline-reports',
    charts: true,
    reportPageTitle: 'Automation Practice By Norman Lirio Report',
    code: true,
    reportFilename: '[status]_[datetime]-[name]-report',
  },
})
