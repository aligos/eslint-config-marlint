'use strict';
var assert = require('assert');
var path = require('path');
var fs = require('fs');
var isPlainObj = require('is-plain-obj');
var eslint = require('eslint');
var tempWrite = require('temp-write');
var clearRequire = require('clear-require');

function runEslint(str, conf) {
  var linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str);
}

describe('eslint-config-marlint', function() {
  describe('marlint-node', function() {
    it('should validate node javascript styleguide', function() {
      clearRequire.all();
      var conf = require('../');
      assert(isPlainObj(conf));
      assert(isPlainObj(conf.env));
      assert(isPlainObj(conf.rules));
      assert(conf.parser === 'babel-eslint');

      var file = fs.readFileSync(path.join(__dirname, '../fixture.js'), 'utf-8');
      var result = runEslint(file, conf);
      var errors = result.results[0].messages;
      assert(errors[0].ruleId === 'no-unused-vars');
      assert(errors[1].ruleId === 'quotes');
      assert(errors[2].ruleId === 'semi');
    });
  });

  describe('marlint-browser', function() {
    it('should validate browser javascript styleguide', function() {
      clearRequire.all();
      var conf = require('../browser');

      assert(isPlainObj(conf));
      assert(isPlainObj(conf.env));
      assert(isPlainObj(conf.rules));
      assert(conf.parser === 'babel-eslint');

      var result = runEslint('\'use strict\';\nprocess.exit();\n', conf);
      var errors = result.results[0].messages
      assert(errors[0].ruleId === 'no-undef');
    });
  });
});
