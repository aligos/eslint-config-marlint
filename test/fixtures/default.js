/* @flow */
const Block = () => {
  return <div className="as" />;
};

var text = 'random';
text += 'a';
let x = {
  text: text
};

x.run(function () {});

console.log("testing" + x.text)
