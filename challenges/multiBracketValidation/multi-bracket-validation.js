// function multiBracketValidation(input) {
//   const arr = input.split('');
//   let openArr = [];
//   let closedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
//       openArr.push(arr[i]);
//     }
//     if (arr[i] === ')' || arr[i] === ']' || arr[i] === '}') {
//       closedArr.push(arr[i]);
//     }
//   }
//   if (openArr.length !== closedArr.length) return false;
//   let resultArray = [];
//   for (let i = 0; i < openArr.length; i++) {
//     if (openArr[i] === '(' && closedArr[i] === ')') resultArray.push(true);
//     else if (openArr[i] === '[' && closedArr[i] === ']') resultArray.push(true);
//     else if (openArr[i] === '{' && closedArr[i] === '}') resultArray.push(true);
//     else resultArray.push(false);
//   }

//   console.log(openArr);
//   console.log(closedArr);
//   const finalResult = resultArray.includes(false);
//   if (finalResult) return false;
//   else return true;


// }

function bracketValidator(input) {
  const { Stack } = require('../stacksAndQueues/stacks-and-queues');
  const bracketStack = new Stack();
  const referenceArray = ['(', ')', '[', ']', '{', '}'];
  const bracketArray = input.match(/[({[)}\]]/g);
  for (let i = 0; i < bracketArray.length; i++) {
    let poppedNode;
    if (bracketArray[i] === '(' || bracketArray[i] === '[' || bracketArray[i] === '{') {
      bracketStack.push(bracketArray[i]);
    } else {
      poppedNode = bracketStack.pop();
      if (!poppedNode) return false;
      let closedIndex = referenceArray.indexOf(bracketArray[i]);
      let openIndex = referenceArray.indexOf(poppedNode);
      if (closedIndex !== openIndex + 1) return false;
    }
  }
  return true;

}

module.exports = bracketValidator;







// '{}' true
// '{}(){}'	true
// '()[[Extra Characters]]'	true
// '(){}[[]]'	true
// '{}{Code}[Fellows](())' true
// '[({}]' false
// '(]('	false
// '{(})' false