module.exports = {
  root: true,
  extends: "airbnb",
  plugins: ["react", "react-native"],
  globals: {
    fetch: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    "no-console": 0,
    "react/forbid-prop-types": [0, { forbid: ["any", "array", "object"] }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-use-before-define": [2, { "variables": false }],
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/accessible-emoji": 0,
    "comma-dangle": ["error", 'never'],
    "object-curly-newline": 0,
    "global-require": 0,
    "arrow-parens": 0
  },
};
