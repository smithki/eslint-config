module.exports = {
  extends: [
    // Airbnb provides:
    //   -> eslint-plugin-import
    //   -> eslint-plugin-jsx-a11y
    //   -> eslint-plugin-react
    //   -> eslint-plugin-react-hooks
    // https://github.com/airbnb/javascript
    'airbnb',
  ],

  rules: {
    // This rule has some noticeable bugs when linting TypeScript and generally
    // enforces noisy code.
    'react/no-unescaped-entities': 0,

    'react/jsx-props-no-spreading': 0,
  },
};
