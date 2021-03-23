// 8. Write a JavaScript program to remove a character at the specified position 
// of a given string and return the new string. 


function removeChar(str,position) 
{
 
    str = str.substring(0,position) + str.substring(position+1,str.lenth)
   return str
}

console.log(removeChar("abcd",2))