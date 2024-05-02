function area(length, width){
  return a = length * width;
}

function perimeter(length, width){
   return p = length + width + length + width; // this can be simplified to [ length * 2 + width * 2] 
}

function volume(length, width, height){
   return v = length * width * height;
}

function surfaceArea(length, width, height){
        return sA = (length * width * 2) + (length * height * 2) + (width * height * 2);
}


// testing the funtions 
console.log(area(10,10));
console.log(area(0,9999));

console.log(perimeter(10,10));
console.log(perimeter(0,9999));

console.log(volume(10,10,10));
console.log(perimeter(9999,0,9999));

console.log(surfaceArea(10,10,10));
console.log(surfaceArea(9999,0,9999));