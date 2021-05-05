
//Calculate the sum of numbers in an array of numbers

function sumArray(ar){
    var sum=0;
    for(var i=0;i<ar.length;i++){
        sum+=ar[i];
    }
    return sum;
}

 var r = sumArray([4,5,8,5]);

 console.log(r);