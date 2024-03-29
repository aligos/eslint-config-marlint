/* eslint-disable quote-props */
'use strict';

module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel', 'react'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    node: true,
    es6: true
  },
  // rules with 1 as value is like depreciation notice, you should migrate soon
  // notes that rule with babel/ counter part will defaults to 0
  rules: {
    // Possible Errors
    'comma-dangle': [2, 'never'],
    'no-cond-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,

    // disabled because of https://github.com/eslint/eslint/issues/2808
    // 'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,

    // disabled because of https://github.com/eslint/eslint/issues/3065
    // 'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'no-unexpected-multiline': 2,

    // Best Practices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'curly': 2,
    'default-case': 2,
    'dot-notation': 2,
    'dot-location': [2, 'property'],
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,

    // disabled because of https://github.com/eslint/eslint/issues/4236
    // 'no-magic-numbers': [1, {ignore: [-1, 0, 1, 60, 1000], detectObjects: true}],

    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-new': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': [2, 'always'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-with': 2,
    'radix': 2,
    'wrap-iife': [2, 'inside'],
    'yoda': 2,

    // Strict Mode
    // disabled because of https://github.com/eslint/eslint/issues/3306
    // 'strict': [2, 'global'],

    // Variables
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-undef': [2, { typeof: true }],
    'no-use-before-define': [2, 'nofunc'],

    // Node.js

    // disabled because of https://github.com/eslint/eslint/issues/3420
    // 'callback-return': [1, ['cb', 'callback', 'next', 'done']],

    'handle-callback-err': 1,
    'no-mixed-requires': [2, { grouping: true, allowCall: true }],
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-restricted-imports': [2, 'domain', 'freelist', 'smalloc', 'sys', 'colors'],
    'no-restricted-modules': [2, 'domain', 'freelist', 'smalloc', 'sys', 'colors'],

    // Stylistic Issues
    'array-bracket-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', { allowSingleLine: false }],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'eol-last': 2,
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'keyword-spacing': 2,
    'linebreak-style': [2, 'unix'],
    'max-nested-callbacks': [1, 4],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-nested-ternary': 2,
    'no-negated-condition': 2,
    'no-new-object': 2,
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-whitespace-before-property': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'one-var-declaration-per-line': 2,
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'consistent-as-needed'],
    'semi-spacing': [2, { before: false, after: true }],
    'semi': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': [2, 'always', { markers: ['!'] }],

    // ES2015
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, { before: true, after: true }],
    'constructor-super': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-useless-constructor': 2,
    'template-curly-spacing': 2,
    'yield-star-spacing': [2, 'both'],

    // Indent using 2 space
    'indent': [2, 2, { SwitchCase: 1 }],

    // beware of https://github.com/eslint/eslint/issues/5234
    'quotes': [2, 'single'],

    // Allow function arguments to be unused, but disallow others.
    // This pattern is used in express, and also useful in some cases
    // where unused args is better than remembering what args available
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],

    // Backward compatibility with old scripts
    'no-script-url': 1,

    // do not throw error on warning comment
    'no-warning-comments': 1,

    // some content resource key are written in snake_case
    'camelcase': 0,

    // unified quotes, also use single quote in jsx
    'jsx-quotes': [2, 'prefer-single'],

    // some constructor are behind a lower-cased namespace, e.g: webpack.SomePlugin
    'new-cap': 0,

    // for easier reading, always add space inside curly brace
    'object-curly-spacing': 0,
    'babel/object-curly-spacing': [2, 'always'],

    // One var only useful in pre ES2015 anyway
    'one-var': 0,

    // It's useful, but not necessary
    'object-shorthand': 0,
    'babel/object-shorthand': 1,

    // Solve most var self = this; problem
    'prefer-arrow-callback': 2,

    // Template strings and spread are easier to read and debug, but not required
    'prefer-template': 1,
    'prefer-spread': 1,

    // Mark generator function with asterisk in the function name
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': [2, 'before'],

    // Flowtype currently doesn't support Reflect
    'prefer-reflect': 0,

    // Use let and const instead of var
    'no-var': 2,
    'prefer-const': 2,

    // Default sane falue from eslint-plugin-react
    'react/react-in-jsx-scope': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 2,
    'react/require-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/self-closing-comp': 2,
    'react/sort-comp': 0,
    'react/wrap-multilines': 2,

    // Some application need dangerouslySetInnerHtml
    'react/no-danger': 1,

    // For easier debugging, use displayName and propTypes
    'react/display-name': 1,
    'react/prop-types': 1,

    // No need to add space to jsx value inside curly brace as it'll be
    // confusing with object declaration
    'react/jsx-curly-spacing': [2, 'never']
  }
};
