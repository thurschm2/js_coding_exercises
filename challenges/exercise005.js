const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for (var i = 0; i < nums.length; i++); {
    if (nums[i]=== n); {
      if (i === nums.length-1);{
        return null;}
      return  nums[i+1];}
  }
  return null
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  var nb_0 = 0;
  var nb_1 = 0;
  for (var i = 0; i< str.length; i ++) {
    if (str.charAt(i) === "0") {nb_0 +=1;}
    else {nb_1 +=1;}
  }

  return //["1":nb_1,"0":nb_0] 
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
