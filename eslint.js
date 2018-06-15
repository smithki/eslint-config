module.exports = {
  // Parse using babel-eslint to support upcoming ES features.
  parser: 'babel-eslint',

  extends: [
    // Airbnb provides:
    //   -> eslint-plugin-import
    //   -> eslint-plugin-jsx-a11y
    //   -> eslint-plugin-react
    // https://github.com/airbnb/javascript
    'airbnb',

    // Disables rules that would interfere with Prettier-enforced codestyle.
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],

  plugins: [
    // Plugs Prettier into ESLint workflow & enables Prettier-based auto-fixing.
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier',
  ],

  rules: {
    // Core ESLint rules
    // https://eslint.org/docs/rules/
    // rules go here...

    // Prettier rules
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': ['error', {
      printWidth: 80,
      tabWidth: 2,
      semi: true,
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: true,
      jsxBracketSameLine: false,
    }],

    // Import rules
    // https://github.com/benmosher/eslint-plugin-import
    // rules go here...

    // JSX a11y rules
    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    // rules go here...

    // React rules
    // https://github.com/yannickcr/eslint-plugin-react
    'react/jsx-filename-extension': 'off',
  },

  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    commonjs: true,
  },
};
