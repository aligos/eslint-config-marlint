'use strict';
var fs = require('fs');
var path = require('path');
var test = require('ava');
var isPlainObj = require('is-plain-obj');
var eslint = require('eslint');
var tempWrite = require('temp-write');

function runEslint(str, conf) {
  var linter = new eslint.CLIEngine({
    useEslintrc: false,
    configFile: tempWrite.sync(JSON.stringify(conf))
  });

  return linter.executeOnText(str).results[0].messages;
}

test('node', t => {
  var conf = require('../');
  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.env));
  t.true(isPlainObj(conf.rules));

  var fixture = path.join(__dirname, 'fixtures/default.js');
  var file = fs.readFileSync(fixture, { encoding: 'utf-8' });
  var errors = runEslint(file, conf);
  t.is(errors[0].ruleId, 'no-unused-vars');
  t.is(errors[1].ruleId, 'react/display-name');
  t.is(errors[2].ruleId, 'react/react-in-jsx-scope');
  t.is(errors[3].ruleId, 'jsx-quotes');
  t.is(errors[4].ruleId, 'no-var');
  t.is(errors[5].ruleId, 'prefer-const');
  t.is(errors[6].ruleId, 'babel/object-shorthand');
  t.is(errors[7].ruleId, 'prefer-arrow-callback');
  t.is(errors[8].ruleId, 'quotes');
  t.is(errors[9].ruleId, 'prefer-template');
  t.is(errors[10].ruleId, 'semi');

  t.end();
});

test('browser', t => {
  var conf = require('../browser');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.env));
  t.true(isPlainObj(conf.rules));
  t.is(conf.parser, 'babel-eslint');

  var fixture = path.join(__dirname, 'fixtures/browser.js');
  var file = fs.readFileSync(fixture, { encoding: 'utf-8' });
  var errors = runEslint(file, conf);
  t.is(errors[0].ruleId, 'no-undef');

  t.end();
});

test('es5', t => {
  var conf = require('../es5');

  t.true(isPlainObj(conf));
  t.true(isPlainObj(conf.env));
  t.true(isPlainObj(conf.rules));
  t.is(conf.parser, 'babel-eslint');

  var fixture = path.join(__dirname, 'fixtures/es5.js');
  var file = fs.readFileSync(fixture, { encoding: 'utf-8' });
  var errors = runEslint(file, conf);
  t.is(errors[0].ruleId, 'no-undef');
  t.is(errors[1].ruleId, 'handle-callback-err');
  t.is(errors[2].ruleId, 'no-use-before-define');
  t.is(errors[3].ruleId, 'semi');
  t.is(errors[4].ruleId, 'one-var');
  t.is(errors[5].ruleId, 'indent');

  t.end();
});
