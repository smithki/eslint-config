module.exports = {
  extends: [
    './rules/base',
    './rules/typescript',
    './rules/airbnb',
    './rules/prettier',
  ].map(require.resolve),
};
