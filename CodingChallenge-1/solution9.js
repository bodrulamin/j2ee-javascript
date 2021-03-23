// 9. Write a JavaScript program to check whether a given positive number is 
// a multiple of 3 or a multiple of 7.


function test3_7(num) {
    if (num%3==0 || num%7==0) {
        return true;        
    }else return false;
}


console.log(test3_7(8));