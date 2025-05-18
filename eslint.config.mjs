import js from "@eslint/js";
import globals from "globals";

export default [
	js.configs.recommended,
	{
		files: ["**/*.js"],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module"
			}
		},
		rules: {
			"indent": ["error", 2, { "SwitchCase": 1 }],
			"linebreak-style": ["error", "unix"],
			"quotes": ["error", "single", { "avoidEscape": true }],
			"semi": ["error", "always"],
			"no-console": "warn",
			"no-unused-vars": "warn",
			"no-undef": "error",
			"comma-dangle": ["error", "never"],
			"no-trailing-spaces": "error",
			"eol-last": ["error", "always"]
		}
	},
	{
		files: ["**/*.test.js"],
		languageOptions: {
			globals: {
				...globals.jest
			}
		},
		rules: {
			"no-console": "off",
			"no-unused-vars": "off"
		}
	},
	{
		ignores: [
			"dist/**",
			"node_modules/**",
			"coverage/**",
			".github/**",
			"**/*.config.js"
		]
	}
];