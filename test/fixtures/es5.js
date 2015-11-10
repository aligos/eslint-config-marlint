'use strict';

var x = 5;

request.post('http://mar.lint')
    // use function instead of arrow callback
    .end(function (err) {
      // use concat instead of template string
      console.log('a' + y.x);
    })

var y = {
  // doesn't use object shorthand
    x: x
};
