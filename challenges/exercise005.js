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
    let nbZeros = (str.match(/"0"/g) || []).length;
    let nbOnes = (str.match(/"1"/g) || []).length;
    var numbers = new Array();
    numbers['1'] = nbZeros;
    numbers['0'] = nbOnes;
    console.log("numbers : ",numbers)
    return numbers;

    //return ["1": nbOnes, "0": nbZeros];
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
