# ⚙️ eslint-config

[![code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> An opinionated [ESLint config](https://eslint.org/docs/user-guide/configuring) with Airbnb JavaScript, TypeScript, React, and Prettier baked-in.

## 🔗 Getting Started

### Install via NPM or Yarn:

Using `npm`:

```sh
npm install @ikscodes/eslint-config --save-dev
```

Using `yarn`:

```sh
yarn add -D @ikscodes/eslint-config
```

### Install required `peerDependencies`:

If using **`npm@>7.x`**, peer dependencies [will be installed automatically](https://github.blog/2021-02-02-npm-7-is-now-generally-available/), assuming no conflicts arise between peer dependency versions within your project.

If using **`npm@>5.x`**, use this shortcut (`yarn` will be automatically detected, if in use):

```sh
npx install-peerdeps --dev @ikscodes/eslint-config
```

Alternatively, Linux and macOS users can one of these commands:

```sh
# Using NPM:
(
  export PKG=@ikscodes/eslint-config;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

```sh
# Using Yarn:
(
  export PKG=@ikscodes/eslint-config;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add -D "$PKG@latest"
)
```

## 🛠️ Usage

In `.eslintrc`:

```javascript
{
  "extends": "@ikscodes/eslint-config"
}
```

By default, all configuration from [`./rules`](./rules) is included (including TypeScript support). Depending on your use-case, only a subset of the included rules may be applicable. You have the option to granularly customize how your ESLint configuration extends from `@ikscodes/eslint-config`:

```javascript

{
  // JAVASCRIPT: This is the recommended order of inclusion.
  //             Prettier should always be the last in the list.
  "extends": [
    "@ikscodes/eslint-config/rules/airbnb",
    "@ikscodes/eslint-config/rules/eslint",
    "@ikscodes/eslint-config/rules/prettier"
  ],

  // TYPESCRIPT: If using TypeScript, add the following `overrides` entry:
  "overrides": [
    {
      "files": ['**/*.ts', '**/*.tsx'],
      "extends": [
        "@ikscodes/eslint-config/rules/airbnb",
        "@ikscodes/eslint-config/rules/typescript", // 👈 TypeScript-specific rules
        "@ikscodes/eslint-config/rules/eslint",
        "@ikscodes/eslint-config/rules/prettier",
      ]
    }
  ]
}
```

If granularity is no matter, but still some JavaScript-specific and/or TypeScript-specific overrides are necessary, the previous example is equivalent to this:

```javascript

{
  "extends": [
    "@ikscodes/eslint-config/javascript",
  ],

  "overrides": [
    {
      "files": ['**/*.ts', '**/*.tsx'],
      "extends": [
        "@ikscodes/eslint-config/typescript"
      ]
    }
  ]
}
```

### Configuring TypeScript

By default, ESLint will search for `./tsconfig.json` to understand your TypeScript preferences. You can customize this with some additional configuration in `.eslintrc`:

```javascript
{
  "parserOptions": {
    "project": "path/to/tsconfig.json"
  }
}
```

### Configuring Prettier

By default, ESLint will search for a [`.prettierrc` file](https://prettier.io/docs/en/configuration.html) to understand your code-formatting preferences. [I've also created a library of default Prettier settings that I like to use.](https://github.com/smithki/prettier-config)

Though not recommended, if you would prefer to set your Prettier configuration inside of ESLint itself, you can do so:

```javascript
{
  "rules": {
    "prettier/prettier": ["error", {/* ...Prettier settings here */}, { "usePrettierrc": false }]
  }
}
```

### Resolving TypeScript imports with `eslint-plugin-import`

This configuration includes [`eslint-import-resolver-typescript`](https://github.com/alexgorbatchev/eslint-import-resolver-typescript). This enables `eslint-plugin-import` to parse your TypeScript [`paths`](https://www.typescriptlang.org/docs/handbook/module-resolution.html) option to resolve imported modules. By default, `eslint-plugin-import` will search for `./tsconfig.json` to understand your TypeScript preferences. You can customize this with [some additional configuration in `.eslintrc`.](https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration)

A basic setup might look similar to:

```javascript
{
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": "path/to/tsconfig.json"
      }
    }
  }
}
```

## ⚡ What's Included?

### Configurations

- [`eslint`](https://eslint.org/docs/rules/)
- [`eslint-config-airbnb`](https://github.com/airbnb/javascript)
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)

### Plugins

- From `eslint-config-airbnb`:
  - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
  - [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
  - [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)
- [`@typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Additional Tooling

- [`eslint-import-resolver-typescript`](https://github.com/alexgorbatchev/eslint-import-resolver-typescript)

## 🗜️ Versioning

```
+————— Major version is synchronized with ESLint's major version.
| +——— Minor version has BREAKING CHANGES or features.
| | +— Patch version has non-breaking changes.
| | |
x.x.x
```

## ⚖️ License

[MIT](./LICENSE)
