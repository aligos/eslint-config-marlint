'use strict';
var deepAssign = require('deep-assign');
var def = require('./');

var config = deepAssign({}, def);

// Disable conflicting es6 rules
config.rules['babel/object-shorthand'] = 0;
config.rules['object-shorthand'] = 0;
config.rules['prefer-template'] = 0;
config.rules['prefer-arrow-callback'] = 0;
config.rules['prefer-spread'] = 0;

module.exports = config;
