// 3. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.


function getDiff(number) {
    var result;
    if (number > 13) {
        result = (number - 13) * 2;
    }
    else {
        result = (13-number);
    }

    return result;

}

console.log(getDiff(14));
