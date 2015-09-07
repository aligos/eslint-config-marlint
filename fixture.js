/* @flow */
import React from 'react';

var x = React.createClass({
  render() {
    return React.DOM.div(null);
  }
});

class Foo extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() : ReactElement {
    return React.DOM.div(x, { className: 'testing' });
  }
}
console.log("testing")
