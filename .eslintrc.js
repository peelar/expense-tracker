module.exports = {
  settings: {
      react: {
          version: "detect",
      },
  },
  env: {
      browser: true,
      commonjs: true,
      es6: true,
      jest: true,
      node: true,
  },
  extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "next",
      "next/core-web-vitals"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
          jsx: true,
          modules: true,
      },
      project: "./tsconfig.json",
  },
  plugins: ["simple-import-sort", "prettier", "react", "react-hooks", "@typescript-eslint"],
  ignorePatterns: [".eslintrc.js"],
  rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "warn",
      "max-lines": "warn",
      "no-alert": "warn",
      "no-console": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "react/display-name": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/switch-exhaustiveness-check": "warn",
      "import/no-duplicates": "error",
      "simple-import-sort/imports": [
          "warn",
          {
              groups: [
                  // Side effect imports.
                  ["^\\u0000"],
                  // React and react-* libs and other packages
                  ["^react$", "^react-.*", ".*react$", "^@.*", "^"],
                  // app imports
                  ["^(styles|App)$", "^(features|config|models|shared|hooks|layouts|pages|utils|styles).*"],
                  ["^(assets).*"],
                  // Anything that starts with a dot.
                  ["^\\..+", "^\\.$"],
              ],
          },
      ],
  },
}
