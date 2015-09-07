'use strict';
var test = require('ava');
var isPlainObj = require('is-plain-obj');
var eslint = require('eslint');
var fs = require('fs');
var tempWrite = require('temp-write');
var clearRequire = require('clear-require');

function runEslint(str, conf) {
  var linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str).results[0].messages;
}

test('node', function (t) {
  clearRequire.all();
  var conf = require('../');
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.env));
  t.true(isPlainObj(conf.rules));

  var file = fs.readFileSync('./fixture.js', { encoding: 'utf-8' });
  var errors = runEslint(file, conf);
  t.is(errors[0].ruleId, 'react/display-name');
  t.is(errors[1].ruleId, 'no-unused-vars');
  t.is(errors[2].ruleId, 'quotes');
  t.is(errors[3].ruleId, 'semi');

  t.end();
});

test('browser', function (t) {
  clearRequire.all();
  var conf = require('../browser');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.env));
  t.true(isPlainObj(conf.rules));
  t.is(conf.parser, 'babel-eslint');

  var errors = runEslint('\'use strict\';\nprocess.exit();\n', conf);
  t.is(errors[0].ruleId, 'no-undef');

  t.end();
});
