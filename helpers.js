const findPowers = (n, x) => {
  let powersList = [];
  let power = 0;
  let i = 0;
  if (x == 1) return [1];
  while (power < parseInt(n, 2)) {
    power = x ** i;
    powersList.push(power.toString(2));
    i++;
  }
  return powersList;
};

module.exports = {findPowers};
