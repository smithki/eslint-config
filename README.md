# ⚙️ eslint-config

[![code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> An [ESLint config](https://eslint.org/docs/user-guide/configuring) with Airbnb JavaScript, TypeScript, React, and Prettier baked-in.

## 🔗 Installation

### Install Configuration Via `npm` or `yarn`:

```sh
npm install @ikscodes/eslint-config --save-dev
```

```sh
yarn add -D @ikscodes/eslint-config
```

### Install Required `peerDependencies`:

List the required peer dependencies:

```sh
npm info "eslint-config-airbnb@latest" peerDependencies
```

If using **`npm@>5.x`**, use this shortcut (this will detect `yarn` automatically):

```sh
npx install-peerdeps --dev eslint-config-airbnb
```

Alternatively, Linux and macOS users can run this command:

```sh
# Using NPM:
(
  export PKG=@ikscodes/eslint-config;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)

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

By default, all configuration from [`./rules`](./rules) is included. Each configuration files is available as a separate file so you can mix in just what you need! So you can also do:

```javascript
// NOTE: This is the recommended order of inclusion.
//       Prettier should always be the last in the list.

{
  "extends": [
    '@ikscodes/eslint-config/rules/airbnb',
    '@ikscodes/eslint-config/rules/typescript',
    '@ikscodes/eslint-config/rules/eslint',
    '@ikscodes/eslint-config/rules/prettier',
  ]
}
```

## ⚡ Configuration

### Rules

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
- [`@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

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
