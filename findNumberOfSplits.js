function minSplits(binary, list) {
  let splits = 0;
  if(!binary) return -1
  const findMinNumberOfSplits = (n, list) => {
    for (let i = n.length; i > 0; i--) {
      const element = n.slice(0, i);
      if (list.includes(element)) {
        if (i === n.length) return 1;
        const newBinary = binary.slice(i);
        const subResult = minSplits(newBinary, list);
        if (subResult && !splits) {
          splits = subResult + 1;
        }
      }
    }
    return splits;
  };
  return findMinNumberOfSplits(binary, list);
}

module.exports = minSplits;
