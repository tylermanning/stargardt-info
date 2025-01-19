module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  globals: {
    kofiWidgetOverlay: "readonly", // Declare 'kofiWidgetOverlay' as a global variable
  },
  extends: ["eslint:recommended", "plugin:astro/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
};
