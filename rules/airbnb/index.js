module.exports = {
  extends: [
    // Airbnb provides:
    //   -> eslint-plugin-import
    //   -> eslint-plugin-jsx-a11y
    //   -> eslint-plugin-react
    // https://github.com/airbnb/javascript
    'airbnb',
  ],

  rules: {
    // This rule has some noticeable bugs when linting TypeScript and generally
    // enforces noisy code.
    'react/no-unescaped-entities': 0,

    'react/jsx-props-no-spreading': 0,

    'no-restricted-syntax': [
      'error',
      // Override some outdated opinions from Airbnb
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    'import/extensions': 0,

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
