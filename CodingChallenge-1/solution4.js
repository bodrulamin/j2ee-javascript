// 4. Write a JavaScript program to check two given numbers and return true if one of the number
// is 50 or if their sum is 50.


function checkFifty(num1, num2) {
    if (num1 == 50 || num2 == 50 || (num1 + num2) == 50)
        return true;

    else {
        return false;
    }
}
console.log(checkFifty(25,25));
console.log(checkFifty(25,2));
console.log(checkFifty(25,50));
