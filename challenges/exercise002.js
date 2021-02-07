function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

    return sandwich.fillings
  
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city == "Manchester"

}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  var nbbus;
  var remainder;
  nbbus = Math.floor(people/40);
  remainder = people % 40; 
  if (remainder> 0) {nbbus ++;}
  //console.log(people,nbbus)
  return nbbus;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var count = 0;
  for( var i = 0; i < arr.length; i++){
        if(arr[i] === "sheep") 
          {count ++};
    }
  return count

// Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if ((person.address.postCode.charAt(0) === "M") && 
    (person.address.city === "Manchester")) {
      return true;
    }
  else {return false;}
  return false
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
