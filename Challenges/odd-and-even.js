function isOdd(number){
   
    if((number % 2) == 0 || (number ==0)){
        return true;
    }else{
        return false;
    }
}

function isEven(number){
 if((number %  2) != 0 || (number == 0)){
    return true;
 }else{
    return false;
 }

}

// tesing the funtions here :
console.log(isOdd(42));
console.log(isEven(42));