module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],

  rules: {
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     tabWidth: 2,
    //     singleQuote: true,
    //     trailingComma: 'none',
    //     htmlWhitespaceSensitivity: 'strict',
    //     vueIndentScriptAndStyle: true
    //   }
    // ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'] //需要忽略的组件名
      }
    ],
    'vue/attributes-order': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
};
