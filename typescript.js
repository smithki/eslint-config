// TypeScript-only entry-point.
module.exports = {
  extends: [
    './rules/airbnb',
    './rules/airbnb/hooks',
    './rules/typescript',
    './rules/eslint',
    './rules/prettier',
  ].map(require.resolve),
};
