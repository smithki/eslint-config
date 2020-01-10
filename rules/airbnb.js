module.exports = {
  extends: [
    // Airbnb provides:
    //   -> eslint-plugin-import
    //   -> eslint-plugin-jsx-a11y
    //   -> eslint-plugin-react
    //   -> eslint-plugin-react-hooks
    // https://github.com/airbnb/javascript
    'airbnb',
    'plugin:import/typescript',
  ],

  rules: {
    // Import rules
    // https://github.com/benmosher/eslint-plugin-import
    // rules go here...

    // JSX a11y rules
    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    // rules go here...

    // React rules
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    // rules go here...

    // React Hooks rules
    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    // rules go here...
  }
};
