module.exports = {
  rules: {
    // Core ESLint rules
    // https://eslint.org/docs/rules/

    // Too strict, especially during development...
    'no-console': 0,

    // Sometimes you can't avoid camelCase (such as when consuming APIs)...
    camelcase: 0,

    // This rule is too strict, flagging violations even if the reference is at
    // a lower scope (and therefore defined).
    'no-use-before-define': 0,

    // Of all the sugars in modern JavaScript, this is a clean and generally
    // well-understood syntax. Why disallow it?
    'no-plusplus': 0,

    // Disable/soften some nagging rules that make little difference to code
    // cleanliness...
    'prefer-template': 1,
    'max-classes-per-file': 0,
    'lines-between-class-members': 0,
    'no-restricted-syntax': 0,
    'require-await': 0,
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
