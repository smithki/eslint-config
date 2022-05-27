// JavaScipt-only entry-point.
module.exports = {
  extends: [
    './rules/airbnb',
    './rules/airbnb/hooks',
    './rules/eslint',
    './rules/prettier',
  ].map(require.resolve),
};
