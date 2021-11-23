const fs = require("fs");
const minSplits = require("./findNumberOfSplits");
const { findPowers } = require("./helpers");
const readData = require("./readFile");

function main() {
  try {
    const data = readData('in.txt');
    let powersList = findPowers(data.n, data.x);
    const result = minSplits(data.n, powersList);
    console.log(result, 'result');
    fs.writeFileSync("out.txt", `${result}`);
    console.log('See result in out.txt file')
  } catch (e) {
    console.log("Error:", e.stack);
  }
}
main();