require('@rushstack/eslint-patch/modern-module-resolution');

// JavaScipt-only configuration.
module.exports = {
  extends: ['./rules/airbnb', './rules/airbnb/hooks', './rules/eslint', './rules/prettier'].map(require.resolve),
};
