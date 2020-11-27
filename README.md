# @miirinjej/eslint-config

[![npm version](https://img.shields.io/npm/v/@miirinjej/eslint-config.svg)](https://www.npmjs.org/package/@miirinjej/eslint-config)

> Sharable eslint config for JavaScript

## Installation

```
npm install --save-dev @miirinjej/eslint-config eslint
```

## Usage

Add this config to `package.json`:

```yaml
"eslintConfig": {
  "extends": [
    "@miirinjej/eslint-config"
  ]
}
```

See also: [https://eslint.org/docs/user-guide/configuring](https://eslint.org/docs/user-guide/configuring)

### Extending the config

You can extend the current configuration by extending (or overriding) rules or an array of existing configurations:

```yaml
{
  "extends": ["@miirinjej/eslint-config", "./eslint.config.js"],
  "rules": {
    "no-console": "off"
  }
}
```

See also: [https://eslint.org/docs/user-guide/configuring#extending-configuration-files](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)

## Extensions

- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  — Linting of ES2015+ import/export syntax, and prevent issues with misspelling of file paths and import names.
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
  — Best practices when working with promises.
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
  — Various awesome ESLint rules.

## Rules

See [config](https://github.com/miirinjej/eslint-config/blob/master/index.js) itself.

Rules are grouped and sorted by default as in the original lists:

- [eslint](https://eslint.org/docs/rules/)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import#rules)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise#rules)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#rules)
