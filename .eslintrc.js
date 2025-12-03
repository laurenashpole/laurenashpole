module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'simple-import-sort'],
  rules: {
    semi: ['error', 'always'],
    'import/no-anonymous-default-export': [
      'error',
      { allowArrowFunction: true },
    ],
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: false,
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  globals: {
    React: 'writable',
  },
};
