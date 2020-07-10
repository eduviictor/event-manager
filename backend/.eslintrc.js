module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint-config-airbnb-base/rules/best-practices.js',
    'eslint-config-airbnb-base/rules/errors.js',
    'eslint-config-airbnb-base/rules/node.js',
    'eslint-config-airbnb-base/rules/style.js',
    'eslint-config-airbnb-base/rules/variables.js',
    'eslint-config-airbnb-base/rules/es6.js',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  ignorePatterns: [
    '__tests__/coverage',
    'build',
    'src/swagger-ui',
    'node_modules',
    'jest.config.js',
  ],
  rules: {
    'lines-between-class-members': 'off',
    '@typescript-eslint/no-for-in-array': 'warn',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    eqeqeq: 'off',
    '@typescript-eslint/camelcase': 'off',
    camelcase: 'off',
  },
};
