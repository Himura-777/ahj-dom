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
			"indent": ["error", 2],
			"linebreak-style": ["error", "unix"],
			"quotes": ["error", "single"],
			"semi": ["error", "always"],
			"eol-last": ["error", "always"],
			"no-unused-vars": "warn"
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
			"no-console": "off"
		}
	}
];