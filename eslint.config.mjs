import nextPlugin from "@next/eslint-plugin-next";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

export default [
  {
    ignores: [".next/**", "dist/**", "build/**", "out/**", "**/node_modules/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "unused-imports": unusedImportsPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "@next/next": nextPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "prettier/prettier": "error",
      "@next/next/no-img-element": "off",
      "react/prop-types": "off",
      "react/require-default-props": "off",
      "react/no-danger": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      "react/function-component-definition": [
        2,
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "max-len": [
        "warn",
        {
          code: 145,
          tabWidth: 2,
          comments: 120,
          ignoreComments: false,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "import",
          format: null,
        },
        {
          selector: "function",
          format: ["PascalCase", "camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "memberLike",
          modifiers: ["private"],
          format: ["PascalCase"],
          leadingUnderscore: "require",
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],
    },
  },
];
