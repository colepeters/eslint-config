module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  plugins: ['simple-import-sort'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
  rules: {
    camelcase: 'error',
    curly: ['error', 'multi-line'],
    eqeqeq: 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'require-await': 'error',
    'simple-import-sort/imports': 'error',
    yoda: 'warn',
  },
}
