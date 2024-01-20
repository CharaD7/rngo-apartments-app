module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    // '@react-native-community',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  ignorePatterns: ['dist', 'node_modules'],
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      files: ['.ts', '.tsx'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'jest',
    'import',
    'react',
    'react-hooks',
    'react-native',
    'simple-import-sort',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    // '@typescript-eslint/no-undefined': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
        allowNamedExports: false,
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/no-extraneous-dependencies': 'error',
    'import/order': [
      'error',
      {
        groups: [['internal', 'builtin'], 'external', ['sibling', 'parent'], 'object', 'index'],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '~assets/**',
            group: 'external',
          },
          {
            pattern: '~components/**',
            group: 'external',
          },
          {
            pattern: '~data/**',
            group: 'external',
          },
          {
            pattern: '~constants/**',
            group: 'external',
          },
          {
            pattern: '~hooks/**',
            group: 'external',
          },
          {
            pattern: '~navigation/**',
            group: 'external',
          },
          {
            pattern: '~screens/**',
            group: 'external',
          },
          {
            pattern: '~types/**',
            group: 'external',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-extra-semi': ['error'],
    'no-unused-vars': ['warn'],
    'no-undef': ['warn'],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'off',
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: false,
      },
    ],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    react: {
      version: 'detect',
    },
  },
};
