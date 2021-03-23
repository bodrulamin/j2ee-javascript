// 7. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" 
// then return the original string.

function pyCheck(str) {
    
    var firstTwoLetters = str.substring(0,2);
    if (firstTwoLetters=="Py") {
        return str;        
    }
    else return "Py"+str;
    
     
}

console.log(pyCheck("Python"));