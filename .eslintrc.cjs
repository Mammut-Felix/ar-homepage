module.exports = {
  $schema: 'https://json.schemastore.org/eslintrc',

  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxt/eslint-config',
    'plugin:unicorn/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['*.json'],
      plugins: ['json-files'],
      parser: 'eslint-plugin-json-es',
      extends: ['plugin:eslint-plugin-json-es/recommended', 'plugin:json/recommended-legacy'],
      rules: {
        'json-files/ensure-repository-directory': 'error',
        'json-files/eol-last': 'error',
        'json-files/no-branch-in-dependencies': 'error',
        'json-files/require-engines': 'error',
        'json-files/require-unique-dependency-names': 'error',
        'json-files/sort-package-json': 'error'
      }
    }
  ],
  rules: {
    quotes: ['error', 'single'],
    'no-multi-spaces': 'error',
    'no-var': 'error',
    'no-use-before-define': 'error',
    'no-console': 'error',
    'vue/no-v-html': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue-scoped-css/no-unused-selector': 'off',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ],
    'unicorn/prefer-module': 'off',
    'unicorn/filename-case': 'off',
    'prettier/prettier': 'error',
    'unicorn/no-null': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/no-anonymous-default-export': 'off'
  }
}
