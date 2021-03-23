// 1. Write a Javascript function to find the area of triangle where length of the three of its sides are 5,6,7.

function triangleAreaCalculation(a,b,c) {
    var s = (a+b+c)/2;
    var area = Math.sqrt((s*(s-a)*(s-b)*(s-c)));
    return area;
}


console.log(triangleAreaCalculation(5,6,7));