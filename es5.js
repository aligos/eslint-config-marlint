'use strict';
var deepAssign = require('deep-assign');
var def = require('./');

var config = deepAssign({}, def);

// Disable conflicting es6 rules
config.rules['babel/object-shorthand'] = 0;
config.rules['babel/generator-star-spacing'] = 0;
config.rules['prefer-template'] = 0;
config.rules['prefer-arrow-callback'] = 0;
config.rules['prefer-spread'] = 0;
config.rules['no-var'] = 0;
config.rules['prefer-const'] = 0;

// warn about hoisted vars
config.rules['one-var'] = 1;

module.exports = config;
