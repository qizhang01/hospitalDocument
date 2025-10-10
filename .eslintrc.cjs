module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',

  plugins: [ 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    // 'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    // camelcase: ['error', { properties: 'never' }],

    // 'no-var': 'error',
    // 'no-empty': ['error', { allowEmptyCatch: true }],
    // 'no-void': 'error',
    // 'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: true }],
    // 'prefer-template': 'error',
    // 'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
    // 'block-scoped-var': 'error',
    // 'no-constant-condition': ['error', { checkLoops: false }],

    // 'no-redeclare': 'off',
    // 'no-unused-vars': [
    //   'error',
    //   {
    //     argsIgnorePattern: '^_',
    //     varsIgnorePattern: '^_',
    //   },
    // ],

    // // vue
    // 'vue/no-v-html': 'off',
    // 'vue/require-default-prop': 'off',
    // 'vue/require-explicit-emits': 'off',
    // 'vue/multi-word-component-names': 'off',
    // 'vue/one-component-per-file': 'off',

    // // import
    // 'import/first': 'error',
    // 'import/no-duplicates': 'error',
    // 'import/order': [
    //   'error',
    //   {
    //     groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],

    //     pathGroups: [
    //       {
    //         pattern: 'vue',
    //         group: 'external',
    //         position: 'before',
    //       },
    //       {
    //         pattern: '@vue/**',
    //         group: 'external',
    //         position: 'before',
    //       },
    //       {
    //         pattern: 'ant-design-vue',
    //         group: 'internal',
    //       },
    //     ],
    //     pathGroupsExcludedImportTypes: ['type'],
    //   },
    // ],
  },
};
