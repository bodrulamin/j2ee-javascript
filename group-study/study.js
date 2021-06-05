

// // sort with compare function

// var ar = [5,45,2,36,25,4,56,241];
// ar.sort(compare);
// function compare(a,b){
//   return a-b;  // boro theke choto
// }
// console.log(ar);



// var ar2 = [5,45,2,36,25,4,56,241];
// ar2.sort(compare2);
// function compare2(a,b){
//   return b-a;  // choto theke boro
// }
// console.log(ar2);



// check palindrome


// var word = "masdam"

// var revWord = ""; // loop diye o kora jay
// for(var i=word.length-1; i>=0; i--){
//   revWord = revWord + word[i];
// }
 
// if(word==revWord){
//   console.log(word+ " is palindrome");
// }else console.log(word + " is not a palindrome");

function findFibonacci(n){
  if(n==0)
  return 0;
  if(n==1)
  return 1;
   return findFibonacci(n-1)+findFibonacci(n-2);
}
var n = findFibonacci(20);
console.log(n);