module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "react-app",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "airbnb-typescript",
        "prettier",
        "prettier/react",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["react", "@typescript-eslint", "jsx-a11y", "prettier"],
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
        },
        react: {
            pragma: "React",
            version: "detect",
        },
    },
    rules: {
        "no-unused-vars": "off",
        "no-console": "error",
        "no-use-before-define": "off",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": ["error"],
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "react-hooks/exhaustive-deps": "error",
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/no-loop-func": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: ["camelCase", "UPPER_CASE", "PascalCase"],
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE", "PascalCase"],
            },
            {
                selector: "variable",
                types: ["function"],
                format: ["camelCase", "UPPER_CASE", "PascalCase"],
            },
            {
                selector: "variable",
                types: ["boolean"],
                format: ["PascalCase"],
                prefix: ["is", "should", "has", "can", "did", "will"],
            },
            {
                selector: "typeParameter",
                format: ["PascalCase"],
                prefix: ["T"],
            },
            {
                selector: "typeLike",
                format: ["PascalCase"],
            },
        ],
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                trailingComma: "all",
                bracketSpacing: true,
                jsxBracketSameLine: false,
                endOfLine: "auto",
            },
        ],
    },
};
