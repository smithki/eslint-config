// JavaScipt-only entry-point.
module.exports = {
  extends: ['./rules/airbnb', './rules/eslint', './rules/prettier'].map(require.resolve),
};
