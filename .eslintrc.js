module.exports = {
  env: {
    browser: true,
    es6: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    windows: "on",
    eqeqeq: "off",
    semi: "error",
    "no-multi-spaces": "error",
    quotes: ["error", "double"],
    curly: "error",
    "no-use-before-define": "error",
    "no-var": "error",
    indent: "error",
    "space-in-parens": "error",
    "prefer-const": "error",
  },
  plugins: [
    "eslint-plugin-prettier", // the same as "prettier"
  ],
};
