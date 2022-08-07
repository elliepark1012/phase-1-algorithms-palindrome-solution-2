const { interfaces } = require("mocha");

function isPalindrome(word) {
  // Write your algorithm here
  const myArray = word.split("");
  for(let i = 0; i < myArray.length / 2; i ++) {
    const j = myArray.length - 1 - i ;
    if(myArray[i] !== myArray[j]){
    return false};
  }
    return true 
}

/* 
  Add your pseudocode here
  make string into an array 
  iterate through half of the array
  first=last second = second to the last --- till the middle 
  same ? return true 
  not? return false  
*/ 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
