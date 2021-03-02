const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let position = nums.indexOf(n);
  if (position == -1) { return null }
  else
    if (position == nums.length - 1) { return null; }
    else { return nums[position + 1] }
  return null
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let nbZeros = (str.match(/0/g) || []).length;
  let nbOnes = (str.match(/1/g) || []).length;
  let obj = { 1: nbOnes, 0: nbZeros };

  return obj;

};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let numString = n.toString();
  var answer = "";
  for (var i = numString.length - 1; i >= 0; i--) {
    answer = answer + numString[i]
  }
  return Number(answer);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (var i = 0; i < arrs.length; i++) {

    total += arrs[i].reduce(reducer);


  }

  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length > 1) {
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const objectValues = Object.values(haystack);
  const objectValuesLowerCase = objectValues.toString().toLowerCase();

  return (objectValuesLowerCase.indexOf(searchTerm.toLowerCase()) > -1);

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const wordsString = str.replace(/[.,/#!$%^&?*;:{}=\-_`~()]/g, "")
  const wordArray = wordsString.toLowerCase().split(' ');
  const answer = {};

  for (var x = 0; x < wordArray.length; x++) {
    if (answer[wordArray[x]] === undefined) {
      answer[wordArray[x]] = 1;
    } else {
      answer[wordArray[x]]++;
    }
  }
  //  console.log(answer);
  return answer;
};


module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
