import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    extends: ["plugin:prettier/recommended"], // This will enable Prettier as an ESLint rule
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
      "prettier/prettier": "error", // Enforces Prettier formatting as ESLint errors
    },
  },
];
