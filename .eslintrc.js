module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-airbnb',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Aqui você pode adicionar regras personalizadas
    'no-console': 'warn', // Alerta sobre o uso de console.log
    'no-unused-vars': 'warn', // Alerta sobre variáveis não utilizadas
  },
};
