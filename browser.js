'use strict';
var deepAssign = require('deep-assign');
var def = require('./');

var config = deepAssign({}, def);
config.env.node = false;
config.env.browser = true;

module.exports = config;
