module.exports = {
  extends: [
    // Disables rules that would interfere with Prettier-enforced codestyle.
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard',
    'prettier/babel',
    'prettier/flowtype',
    'prettier/unicorn',
    'prettier/vue',
  ],

  plugins: [
    // Plugs Prettier into ESLint workflow & enables Prettier-based auto-fixing.
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier',
  ],

  rules: {
    // Prettier rules
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': ['error', {
      printWidth: 120,
      tabWidth: 2,
      semi: true,
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: true,
      jsxBracketSameLine: false,
    }, {
      usePrettierrc: true
    }],
  }
};
