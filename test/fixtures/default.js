/* @flow */
const Block = () => {
  return <div className="as" />;
};

var text = 'random';
text += 'a';
let x = {
  text: text
};

x.run(
  // unused function args should be okay
  function (req, res, next) {

  }
);

console.log("testing" + x.text)
