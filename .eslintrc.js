module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@eslint/js/recommended', // Assuming this is a valid plugin configuration
  ],
  parserOptions: {
    ecmaVersion: 2020, // or 2020
    sourceType: 'module',
  },
  rules: {
    // Define your rules here
  },
  globals: {
    globalsVar1: 'readonly', // Example of setting a global variable
  },
  plugins: [
    '@eslint/js', // Assuming this is the name of a valid plugin
  ],
};
