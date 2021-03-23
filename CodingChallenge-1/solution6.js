// 6. Write a JavaScript program to check from two given integers, whether one
// is positive and another one is negative.

function positive_negative(num1,num2) {
    if ((num1<0 && num2>0) || (num1>0 && num2<0)) {
        return true;     
    }

    else return false;
}

console.log(positive_negative(-5,8));
console.log(positive_negative(-5,-8));
console.log(positive_negative(5,8));