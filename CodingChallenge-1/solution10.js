// 10. Write a JavaScript program to check whether a string starts 
// with 'Java' and false otherwise.
 
function checkJava(str) {

    var firstFourLetters = str.substring(0,4);
    if (firstFourLetters=='Java') {
        return true;
    }else return false;

 
}

console.log(checkJava("JavaSc"))