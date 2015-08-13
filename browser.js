'use strict';
var config = require('./');

config.env.node = false;
config.env.browser = true;

module.exports = config;
