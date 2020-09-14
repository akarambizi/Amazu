module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier'],
    plugins: ['react', 'prettier'],
    settings: {
        react: {
            version: 'detect', // React version. "detect" automatically picks the version you have installed.
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        // Indent with 4 spaces
        indent: ['error', 4],
        // Indent JSX with 4 spaces
        'react/jsx-indent': ['error', 4],
        // Indent props with 4 spaces
        'react/jsx-indent-props': ['error', 4],
    },
};
