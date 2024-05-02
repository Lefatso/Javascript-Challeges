function fizzBuzz(upTo){
   var oneLine;
   for (let i = 1; i <= upTo; i++) {
       if (( i % 3 == 0) && (upTo % 5 == 0)){
           console.log("FizzBuzz");
       }else if(i % 3 == 0){
           console.log(Fizz);
       }else if(i % 5 == 0){
           console.log("Buzz")
       }else{
          console.log(upTo);
       }
   }
 
}


// testign the function 
fizzBuzz(35);