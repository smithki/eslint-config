require('@rushstack/eslint-patch/modern-module-resolution');

// TypeScript-only configuration.
module.exports = {
  extends: ['./rules/airbnb', './rules/airbnb/hooks', './rules/typescript', './rules/eslint', './rules/prettier'].map(
    require.resolve,
  ),
};
