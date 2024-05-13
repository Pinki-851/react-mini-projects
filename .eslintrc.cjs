module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',

    "plugin:tailwindcss/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"

  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
    plugins: ["prettier", "@typescript-eslint"],

  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
     "no-unused-vars": "off",
     "@typescript-eslint/no-unused-vars": "off", // turn this to "warn" later
    "@typescript-eslint/no-explicit-any": "off", // turn this to "warn" later
    "prefer-const": "off", // turn this to "warn" later
    "no-console": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "off" // It is offbecause it conflicts when prettier re-orders classes


  },
}
