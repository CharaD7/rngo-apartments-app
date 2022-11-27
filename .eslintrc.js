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
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
        // '@react-native-community',
        'prettier',
        'prettier/react'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    ignorePatterns: ['!.*', '**/*.js', 'dist', 'node_modules'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['jest', 'import', 'react', 'react-hooks', 'react-native', '@typescript-eslint', 'prettier'],
    rules: {
        'import/order': [
            'error',
            {
                groups: [
                    ['external', 'builtin'],
                    'internal',
                    ['sibling', 'parent'],
                    'index',
                ],
                pathGroups: [
                    {
                        pattern: '@(react|react-native)',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@src/**',
                        group: 'internal',
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
        'linebreak-style': 'off',
        "no-extra-semi": ["error"],
        "no-use-before-define": "off",
        'prettier/prettier': 'error',
        "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 2,
        "semi": [
            "error",
            "always",
            {
                omitLastInOneLineBlock: false
            }
        ],
        'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
        "@typescript-eslint/no-use-before-define": "error"
    },
    "settings": {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            typescript: true,
            node: true
        },
        "react": {
            version: "detect"
        }
    }
};
