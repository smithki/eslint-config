# ⚙️ eslint-config

[![code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> An [ESLint config](https://eslint.org/docs/user-guide/configuring) with Airbnb JavaScript, React, and Prettier baked-in.

## 🔗 Installation

Install via `npm`:

```sh
npm install @ikscodes/eslint-config --save-dev
```

Ensure you also have the required `peerDependencies` installed:

```sh
npm install babel-eslint@^8.2.0 eslint@^4.17.0 eslint-plugin-import@^2.7.0 eslint-plugin-jsx-a11y@^6.0.2 eslint-plugin-react@^7.4.0 eslint-plugin-prettier@^2.3.1 prettier@^1.7.4 --save-dev
```

## 🛠️ Usage

In `.eslintrc`:

```json
{
  "extends": "@ikscodes/eslint-config"
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
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)

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
