const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  // nodeVersion: 'system', // does not work either
  e2e: {
    reporter: 'reporter.js',
    setupNodeEvents(on, config) {},
  },
})
