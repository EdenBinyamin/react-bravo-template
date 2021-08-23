module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': ['off'],
    'react/button-has-type': 'off',
    'arrow-parens': 'off',
    'no-param-reassign': 'off',
    'operator-linebreak': 'off',
    indent: 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-indent': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'eol-last': 'off',
    'object-curly-newline': 'off',
  },
};
