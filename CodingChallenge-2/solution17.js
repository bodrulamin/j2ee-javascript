function sumDigits(n){
    var ns = n.toString();

    var sum = 0;
    for (var i =0; i < ns.length; i++){
        sum += parseInt(ns[i]);
        

    }
    return sum;
}

console.log(sumDigits(555));