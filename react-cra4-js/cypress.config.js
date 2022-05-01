const { defineConfig } = require('cypress');

const config = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
})


module.exports = config;
