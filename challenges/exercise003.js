function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  
  for (var i = 0; i< nums.length; i++){
    nums[i] = Math.pow(nums[i],2);
  }
  
  return nums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var capword, newstring;
  newstring = words[0];
  for (var i = 1; i < words.length ; i++) {
    capword = words[i].charAt(0).toUpperCase()+ words[i].slice(1);
    newstring = newstring + capword;
  }
  
  return newstring
}
  // Your code here!


function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var count = 0;
  for (var i = 0; i<people.length ; i ++) {
    count = count + people[i].subjects.length;
  }
  return count
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  var found = false;
  for (var i = 0; i<menu.length ; i ++) {
    var list_ingr = menu[i].ingredients; 
    for (var j = 0 ; j < list_ingr.length; j ++) {
      if (list_ingr[j] === ingredient) {
        found = true;
      }
    }
  }
  return found;  
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var arr_1 = arr1;
  var arr_2 = arr2;
  var inboth =[];
  var current;
  if (arr1.length < arr2.length) {
    arr_1 = arr2;
    arr_2 = arr1;
  }
    for (var i = 0; i < arr_1.length; i ++) {
      current = arr_1[i]
      if (arr_2.includes(current)) {
        if (inboth.includes(current) === false) {
          inboth.push(current);
        }    
      }
    }
    return inboth.sort()
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
