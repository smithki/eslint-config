module.exports = {
  rules: {
    // Core ESLint rules
    // https://eslint.org/docs/rules/
    // rules go here...
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false,
  },
};