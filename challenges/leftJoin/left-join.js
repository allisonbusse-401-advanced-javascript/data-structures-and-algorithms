
function leftJoin(tableOne, tableTwo) {
  const results = [];
  for (let i = 0; i < tableOne.array.length; i++) {
    if (tableOne.array[i].length > 0) {
      results.push(tableOne.array[i][0]);
    }
  }
  for (let j = 0; j < tableTwo.array.length; j++) {
    if (tableTwo.array[j].length > 0) {
      if (tableOne.get(tableTwo.array[j][0][0])) {
        for(let z = 0; z < results.length; z++) {
          if(results[z][0] === tableTwo.array[j][0][0]) {
            results[z].push(tableTwo.array[j][0][1]);
          }
        }
      }
    }
  }
  results.forEach(array => {
    if(array.length === 2) array.push(null);
  });
  return results;
}

module.exports = leftJoin;


