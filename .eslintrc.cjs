// .eslintrc.cjs
import { FlatConfigArray } from 'eslint';

export default new FlatConfigArray([
   {
      extends: [
         '@nuxtjs/eslint-config',
         '@nuxtjs/eslint-config-typescript',
         '@vue/eslint-config-airbnb'
      ],
      rules: {
         // Regras personalizadas
         'no-console': 'warn',
         'no-debugger': 'warn',
         'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
         'max-len': ['error', { code: 80, ignoreUrls: true }],
         'vue/require-default-prop': 'off',
         'vue/require-prop-types': 'off',
         'import/prefer-default-export': 'off',
         'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
         'no-underscore-dangle': 'off',
         'camelcase': ['error', { properties: 'never' }],
         'object-curly-spacing': ['error', 'always'],
         'consistent-return': 'warn',
         'vue/singleline-html-element-content-newline': 'off',
         'vue/multiline-html-element-content-newline': ['error', { 'ignoreWhenNoAttributes': false, 'ignoreWhenNoContents': false }]
      }
   }
]);
