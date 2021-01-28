function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  for (var i = 0; i< num.length - 1; i++){
    nums[i] = Math.pow(num[i],2);
  }
  return nums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  words = str.split(" ");
  newwords = words[0];
  for (var i = 1; i < words.length - 1; i++) {
    capword = words[i].charAt(0).toUpperCase();
    newwords += capword;
  }
  return newwords;
}
  // Your code here!


function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var arr_1 = arr1;
  var arr_2 = arr2;
  var inboth;
  if (arr1.length < arr2.length) {
    arr_1 = arr2;
    arr_2 = arr1;
  }
    for (var i = 0; i < arr_1.length; i ++) {
      if (arr_2.includes(arr_1[i])) {
        if (inboth.includes(arr_1[i]) == false) {
          inboth.push(arr_1[i]);
        }    
      }
    }
    return inboth
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
