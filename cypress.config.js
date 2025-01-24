const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    e2e: {
      baseUrl: 'https://meus-emprestimos.picpay.com',
      env: {
        hideCredentials: true,
        requestMode: true,
      },
      experimentalRunAllSpecs: true,
      reporter: 'cypress-mochawesome-reporter',
      reporterOptions: {
        reportDir: "cypress/reports",
        overwrite: false,
        html: true,
        json: true,
      },
    },
    fixturesFolder: false,
    video: true,
  },
});
