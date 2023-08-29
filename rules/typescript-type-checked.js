const baseTypeScript = require('./typescript');

module.exports = {
  ...baseTypeScript,
  extends: ['plugin:@typescript-eslint/recommended-type-checked', 'plugin:import/typescript'],
};
