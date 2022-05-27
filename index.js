// Combined JavaScipt + TypeScript entry-point.
module.exports = {
  // JavaScript
  extends: [
    './rules/airbnb',
    './rules/airbnb/hooks',
    './rules/eslint',
    './rules/prettier',
  ].map(require.resolve),

  // TypeScript
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        './rules/airbnb',
        './rules/airbnb/hooks',
        './rules/typescript',
        './rules/eslint',
        './rules/prettier',
      ].map(require.resolve),
    },
  ],
};
