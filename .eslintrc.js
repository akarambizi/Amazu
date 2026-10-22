const path = require('path');

module.exports = {
    extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jest/recommended', 'eslint-config-prettier'],
    plugins: ['react', '@typescript-eslint', 'jest', 'eslint-plugin-prettier'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        // Resolved from the repo root regardless of the directory ESLint is invoked from
        // (client/ and server/ each run their own "lint" script with a different cwd).
        tsconfigRootDir: __dirname,
        project: [path.join(__dirname, 'client/tsconfig.json'), path.join(__dirname, 'server/tsconfig.json')],
    },
    rules: {
        'linebreak-style': 'off',
        '@typescript-eslint/camelcase': 'off',
        // Indent with 4 spaces
        indent: ['error', 4, { SwitchCase: 1 }],
        // Indent JSX with 4 spaces
        'react/jsx-indent': ['error', 4],
        'react/prop-types': 'off', // Since we do not use prop-types
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
        jest: {
            // Avoids requiring `jest` to be installed in every workspace that uses this
            // config (server currently has no test runner / Jest dependency).
            version: 27,
        },
    },
};
