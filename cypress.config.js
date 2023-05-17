const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  component: {
    setupNodeEvents(on, config) {
      console.log('setupNodeEvents for components')

      // https://github.com/bahmutov/cypress-code-coverage
      require('@bahmutov/cypress-code-coverage/plugin')(on, config)

      return config
    },
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});