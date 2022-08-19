module.exports = {
  env: {
    node: true,
  },
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['Index', 'index', 'Layout'],
      },
    ],
  },
};
