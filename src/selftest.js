function isEven(n) {
  return n % 2 == 0;
};

function isOdd(n) {
  return Math.abs(n % 2) == 1;
};

function test(ary){
  if ( isEven(ary.length)){
    return ary[1] + ary[2];
  } else if (isOdd(ary.length)){
   return ary[1];
  } else {
   return "rien";
  }
};

let arrayOne =['un', 'plus', 'grand', 'tableau'];

console.log(test(arrayOne));
