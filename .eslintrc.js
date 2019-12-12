module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "prettier"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  overrides: [
    {
      files: ["packages/client/src/**"],
      env: {
        browser: true,
        node: false
      },
      extends: ["plugin:react/recommended", "plugin:jsx-a11y/recommended"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      plugins: ["react-hooks"],
      settings: {
        react: {
          version: "latest"
        }
      },
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
      }
    }
  ]
};
