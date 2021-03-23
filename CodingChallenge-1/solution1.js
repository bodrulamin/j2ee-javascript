

function triangleAreaCalculation(a,b,c) {
    var s = (a+b+c)/2;
    var area = Math.sqrt((s*(s-a)*(s-b)*(s-c)));
    return area;
}


console.log(triangleAreaCalculation(5,6,7));