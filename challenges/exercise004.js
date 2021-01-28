function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var newvar = [];
  for (var i = 0; i < nums.length; i ++) {
    
    if (nums[i] < 1) {
     
      newvar.push(nums[i]);
    }
    //console.log(newvar);
  }
  return nums

}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  var newlist = [];
  for (var i = 0; i<names.length; i ++) {
    currentname = names[i];
    if (currentname[0] == char) {}
      newlist.push(currentname);
  }// Your code here
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
