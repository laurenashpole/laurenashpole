module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'next',
    'next/core-web-vitals'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'error',
      2,
      {
        'ignoredNodes': ['TemplateLiteral']
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'import/no-anonymous-default-export': [
      'error',
      { 'allowArrowFunction': true }
    ],
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-img-element': 'off'
  },
  globals: {
    'React': 'writable'
  }
};
