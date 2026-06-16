const { defineConfig } = require("cypress");
module.exports = defineConfig({  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.laboratoriodetesting.com/',
      retries: { 
        openMode:0, //colocar 2 2
        runMode: 0
      },
    defaultCommandTimeout: 13000,
    pageLoadTimeout: 80000  
  },
});
