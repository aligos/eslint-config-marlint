/* eslint-disable quote-props */
'use strict';
var deepAssign = require('deep-assign');
var xo = require('eslint-config-xo');

module.exports = deepAssign(xo, {
  parser: 'babel-eslint',
  plugins: ['babel', 'react'],
  // overrides some xo rules
  // rules with 1 as value is like depreciation notice, you should migrate soon
  // notes that rule with babel/ counter part will defaults to 0
  rules: {
    // Indent using 2 space
    'indent': [2, 2, { SwitchCase: 1 }],

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
});
