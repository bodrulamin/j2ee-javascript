function isPrime(n) {

    if (n < 2) {
        return false;
    }
   // 11

   //2,3,4,5,6,7,8,9,10
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}


 for (var i = 1; i<=100; i++){
    if(isPrime(i)){
        console.log(i);
    }
 }

// prime number 
// problem(ii) 8
// problem(ii) 9