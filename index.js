/* eslint-disable quote-props */
'use strict';

module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  ecmaFeatures: {
    arrowFunctions: true,
    binaryLiterals: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    experimentalObjectRestSpread: true,
    forOf: true,
    generators: true,
    globalReturn: true,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    octalLiterals: true,
    regexUFlag: true,
    regexYFlag: true,
    restParams: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    unicodeCodePointEscapes: true
  },
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

    // Disabled because of https://github.com/eslint/eslint/issues/2808
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
    'block-scoped-var': 2,
    'consistent-return': 2,
    'curly': 2,
    'default-case': 2,
    'dot-notation': 2,
    'dot-location': [2, 'property'],
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-label': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 1,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
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
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-void': 2,
    'no-warning-comments': 1,
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
    'no-undef': 2,
    'no-unused-vars': 2,
    'no-use-before-define': [2, 'nofunc'],

    // Node.js
    'callback-return': [1, ['cb', 'callback', 'next', 'done']],
    'handle-callback-err': 1,
    'no-mixed-requires': [2, true],
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-restricted-modules': [2, 'domain', 'freelist', 'smalloc', 'sys'],

    // Stylistic Issues
    'array-bracket-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', {allowSingleLine: false}],
    // some content resource key are written in snake_case
    'camelcase': 0,
    'comma-spacing': [2, {before: false, after: true}],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'self'],
    'eol-last': 2,
    'indent': [2, 2, {SwitchCase: 1}],
    'key-spacing': [2, {beforeColon: false, afterColon: true}],
    'linebreak-style': [2, 'unix'],
    'max-nested-callbacks': [1, 4],
    'new-cap': [2, {newIsCap: true, capIsNew: true}],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-inline-comments': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {max: 1}],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': 0,
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single'],
    'semi-spacing': [2, {before: false, after: true}],
    'semi': [2, 'always'],
    'space-after-keywords': [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-return-throw-case': 2,
    'space-unary-ops': 2,
    'spaced-comment': [2, 'always'],

    // ES2015
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, {before: true, after: true}],
    'constructor-super': 2,
    'generator-star-spacing': [2, 'before'],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-this-before-super': 2,
    'object-shorthand': 0,
    'prefer-spread': 2,
    // Flowtype currently doesn't support let & const
    'no-var': 0,
    'prefer-const': 0,
    // Flowtype also doesn't support Reflect yet
    'prefer-reflect': 1
  }
};
