module.exports = {
  root: true,
  plugins: ['react', 'react-native', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
    useJSXTextNode: false,
  },
  env: {
    'react-native/react-native': true,
  },
  extends: [
    'standard',
    'plugin:react-native/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-native/no-raw-text': 0, // Avoid false positive, wait for fix
    'react-native/sort-styles': 0,
    'react-native/no-color-literals': 0,
    'prettier/prettier': ['error', prettierOptions],
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        // NOTE: If this error triggers, either disable it or add
        // your custom components, labels and attributes via these options
        // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
        controlComponents: ['Input'],
      },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react-native/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-native/jsx-closing-tag-location': 0,
    'react-native/forbid-prop-types': 0,
    'react-native/jsx-first-prop-new-line': [2, 'multiline'],
    'react-native/jsx-filename-extension': 0,
    'react-native/jsx-props-no-spreading': 0,
    'react-native/jsx-no-target-blank': 0,
    'react-native/jsx-uses-vars': 2,
    'react-native/require-default-props': 0,
    'react-native/require-extension': 0,
    'react-native/self-closing-comp': 0,
    'react-native/sort-comp': 0,
    'redux-saga/no-yield-in-race': 2,
    'redux-saga/yield-effects': 2,
    'require-yield': 0,
    'react-native/no-inline-styles': 0,
  },
};
