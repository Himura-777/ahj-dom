import js from "@eslint/js";
import globals from "globals";

export default [
	js.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module'
			}
		},
		rules: {
			'no-plusplus': 'off',
			'no-param-reassign': 'off',
			'no-console': 'warn',
			'no-unused-vars': 'warn',
			'no-undef': 'error',
			'semi': ['error', 'always'],
			'quotes': ['error', 'single'],
			'indent': ['error', 2],
			'comma-dangle': ['error', 'never']
		}
	},
	{
		ignores: [
			'dist/**',
			'node_modules/**'
		]
	}
];