function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1)// Add your code here!
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + "." +lastName.charAt(0).toUpperCase()
  }

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  var answer;
  answer = originalPrice + (originalPrice * vatRate/100)
  //return answer.round(2)
  return answer
  }   

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return originalPrice - (originalPrice * reduction/100)

}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var position;
  var length;
  if(str.length % 2 == 1) {
            position = str.length / 2;
            length = 1;
        } else {
            position = str.length / 2 - 1;
            length = 2;
        }
  return str.substring(position, position + length)

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var answer = "";
  for (var i = word.length-1;i >= 0; i --) {
    answer = answer + word[i]
     }
  //r answer = ord.split('').reverse().join('');
  return answer;

}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var Aanswer = [];
  for (var i = 0 ; i= words.length; i++){
    Aanswer.push(reverseWord(words[i]));
  }
  return Aanswer;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var count=0;
  /*for (var i = 0; i= users.length; i ++) {
    if (users[i]["type"] === "Linux") {
      count ++;
    }
  }
  */
  
  return count;
 }

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var total = 0;
  for(var i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  var avg = total / scores.length;
  return avg.toFixed(2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0) {
      if (n % 5 === 0) {
        return "fizzbuzz";}
      else { 
        return "fizz";}
  }
  else {
    if (n % 5 === 0){
      return "buzz";}
    else {
      return n;}
  }
   
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
