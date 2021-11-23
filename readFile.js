const fs = require("fs");

const readData = (fileName) => {
  try {

  //read file
  const data = fs.readFileSync(fileName, "utf8");
  const rows = data.toString().split("\r\n");
  const n = rows[0];
  const x = Number(rows[1]);
  return {n,x};
  } catch (err) {
    console.log('Error: ', err);
  }
};

module.exports = readData;