 
        // Print all the multiplication tables with numbers from 1 to 10
     
        for (var n = 1; n <=10; n++){
          printTable(n);
          console.log("----");

        }

        function printTable(n){
          for(var i=1; i<=10; i++ ){
            var row = n + "x" + i  +"="+  n * i;
            console.log(row);
          }
        }

 