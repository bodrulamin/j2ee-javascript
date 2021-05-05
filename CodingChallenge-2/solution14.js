 
    // Calculate the sum of odd numbers greater than 10 and less than 30
     var f1 = 0; 
     var f2 = 1;
     var nextTerm;

     for (var i = 1; i<=10; i++){
       console.log(f1);
     
      nextTerm = f1+f2;
      f1 = f2;
      f2 = nextTerm;

     }

   