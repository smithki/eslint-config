module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],

  plugins: ['@typescript-eslint'],

  rules: {
    // Import's `no-cycle` rule can create false-positives when circularly importing types.
    // @see https://github.com/benmosher/eslint-plugin-import/issues/1453
    'import/no-cycle': 0,

    // Avoiding default imports is a generally-accepted pattern in TypeScript.
    'import/prefer-default-export': 0,

    // Disable some nagging rules that make little difference to code
    // cleanliness...
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,

    // TypeScript highlights unused variables for us, making them easy to spot.
    // In some cases, listing callback arguments (even unused ones) is helpful
    // for semantic reasons.
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 0,

    // This rule is too strict, even if
    '@typescript-eslint/no-use-before-define': 0,

    // Sometimes you can't avoid camelCase (such as when consuming APIs)...
    '@typescript-eslint/camelcase': 0,
  }
};
