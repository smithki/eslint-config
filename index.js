// Combined JavaScipt + TypeScript entry-point.
module.exports = {
  // JavaScript
  extends: ['./rules/airbnb', './rules/eslint', './rules/prettier'].map(require.resolve),

  // TypeScript
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['./rules/airbnb', './rules/typescript', './rules/eslint', './rules/prettier'].map(require.resolve),
    },
  ],
};
