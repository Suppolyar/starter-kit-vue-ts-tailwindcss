module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript',
        'plugin:prettier/recommended',
        "plugin:tailwindcss/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        // Your ESLint rule configurations here
    },
};
