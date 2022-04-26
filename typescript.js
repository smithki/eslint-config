// TypeScript-only entry-point.
module.exports = {
  extends: ['./rules/airbnb', './rules/typescript', './rules/eslint', './rules/prettier'].map(require.resolve),
};
