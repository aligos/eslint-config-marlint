# eslint-config-marlint [![Build Status](https://travis-ci.org/traveloka/eslint-config-marlint.svg?branch=master)](https://travis-ci.org/traveloka/eslint-config-marlint)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Marlint](https://github.com/traveloka/marlint)

This is ESLint config based on [XO](https://github.com/sindresorhus/xo) with some adjustment in order to support ES6+ES7, [React](https://facebook.github.io/react) and [Flow](http://flowtype.org/) by default using [babel-eslint](https://github.com/babel/babel-eslint) internally.

For easier setup, you may want to checkout [Marlint](https://github.com/traveloka/marlint)

## Install

```
$ npm install --save-dev eslint-config-marlint
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
	"name": "your-project-name",
	"eslintConfig": {
		"extends": "marlint"
	}
}
```

Or to `.eslintrc`:

```json
{
	"extends": "marlint"
}
```

Use [`marlint/browser`](browser.js) if you're in the browser:

```json
{
	"extends": "marlint/browser"
}
```

By default marlint will lint using ES2015+ rules, if you write in ES5, use [es5 only](es5.js) rules:

```json
{
	"extends": "marlint/es5"
}
```

## License

MIT
