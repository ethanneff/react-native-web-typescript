module.exports = {
  parser: "@typescript-eslint/parser", // specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // allows for the parsing of modern ECMAScript features
    sourceType: "module", // allows for the use of imports
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // typescript
    "prettier/@typescript-eslint", // prettier
    "plugin:react/recommended" // react
  ],
  plugins: ["react-hooks"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/display-name": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "react-hooks/rules-of-hooks": 1,
    "react-hooks/exhaustive-deps": 1
  }
};
