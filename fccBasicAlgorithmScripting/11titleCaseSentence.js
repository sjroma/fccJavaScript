//Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. 
//Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let words = str.toLowerCase().split(' ');
  let capitalWords = [];
  for (let i = 0; i < words.length; i++) {
    capitalWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  return capitalWords.join(' ');
}

//console.log(titleCase("I'm a little tea pot"));                //should return I'm A Little Tea Pot
console.log(titleCase("sHoRt AnD sToUt"));                       //should return Short And Stout
//console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));  //should return Here Is My Handle Here Is My Spout
