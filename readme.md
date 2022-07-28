# @colepeters/eslint-config

My preferred ESLint configuration. I use this configuration alongside [Prettier](https://prettier.io/docs/en/integrating-with-linters.html),
with the following configuration:

```js
module.exports = {
  jsxSingleQuote: true,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
}
```

The usage instructions below presume you want to use Prettier, too.

## Usage

Install this package and dependencies via NPM:

```shell
npm i --save-dev eslint @colepeters/eslint-config prettier eslint-config-prettier
```

Create [an ESLint configuration file](https://eslint.org/docs/latest/user-guide/configuring/) in your project, with the following contents:

```js
module.exports = {
  'extends': ['@colepeters/eslint-config', 'prettier']
}
```

Excluding setup with your IDE, which is outside the scope of this readme, that’s it!

