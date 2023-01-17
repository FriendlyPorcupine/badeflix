module.exports = {
  extends: ['@infotition/eslint-config/next'],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    '@next/next/no-head-element': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
