const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    specPattern: "**/*.feature",

    baseUrl:"https://magento.softwaretestingboard.com/",
    setupNodeEvents(on, config) {
      // return require('./cypress/plugins/index.js')(on,config)
      // implement node event listeners here
    },
  },
});
