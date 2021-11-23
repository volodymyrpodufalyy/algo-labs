const fs = require("fs");

const readData = (fileName) => {
  try {
    // DATA
  let nodes = [];
  let routes = [];
  let startNode;

  //read file
  const data = fs.readFileSync(fileName, "utf8");
  const allNodes = data.toString().split("\r\n");
  startNode = parseInt(allNodes.shift().split(" ")[1]);
  routes = allNodes.map((item) => {
    return [item.split(" ")[0], item.split(" ")[1]];
  });
  nodes = allNodes.join(" ").split(" ");
  const vertices = new Set(nodes);
  return {routes, startNode, vertices, nodes};
  } catch (err) {
    console.log('Error: ', err);
  }
};

module.exports = readData;