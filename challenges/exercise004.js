function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var newvar = [];
  for (var i = 0; i < nums.length; i ++) {
    
    if (nums[i] < 1) {
     
      newvar.push(nums[i]);
    }
    
  }
  return newvar

}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  var newlist = [];
  var currentname;
  for (var i = 0; i < names.length; i ++) {
    currentname = names[i];
    if (currentname[0] === char) {
      newlist.push(names[i]);
    }
  } 
  
  return newlist
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  var verbs = [];
  for (var i = 0; i <words.length; i ++) {
    if (words[i].substring(0,3) === "to ") {
      verbs.push(words[i])
    }
  } 
  return verbs
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  var integers = [];
  
  for (var i = 0; i <nums.length; i ++) {
    
    if (Number.isInteger(nums[i]) === true) {
      integers.push(nums[i])
    }
  }
  return integers
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  var ListCities= [];
  for (var i = 0; i<users.length; i ++){
    ListCities.push(users[i].data.city.displayName);
  } 
  console.log(ListCities)
  return ListCities 
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  var sqrts = [];
  var current;
  //console.log(nums)
  for (var i = 0; i <nums.length; i ++) {
      current = nums[i]
      current = Math.sqrt(nums[i])
      current = parseFloat(current.toFixed(2))
      //console.log(current)
      sqrts.push(current)
    
  }
  return sqrts
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  var newlist = [];
  for (var i = 0; i <sentences.length; i ++) {
    var currentSentence = sentences[i].toUpperCase();
    if (currentSentence.includes(str.toUpperCase())) {
      newlist.push(sentences[i]);
    }
  }
  return newlist
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var largest = [];
  var maxside
  for (var i = 0; i <triangles.length; i ++) {
    maxside = 0;
    for (var j = 0; j < triangles[i].length; j ++) {
      if (triangles[i][j] > maxside) {maxside = triangles[i][j]}
    }
    largest.push(maxside)
  }
  return largest
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
