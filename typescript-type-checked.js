require('@rushstack/eslint-patch/modern-module-resolution');

// TypeScript-only configuration, with type-checking.
module.exports = {
  extends: [
    './rules/airbnb',
    './rules/airbnb/hooks',
    './rules/typescript-type-checked',
    './rules/eslint',
    './rules/prettier',
  ].map(require.resolve),
};
