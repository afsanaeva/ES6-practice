//function declare

function double(num){
    return num*2;
}
const numDouble = double(4);
console.log(numDouble);

//function expression

const triple = function(numbers){
    return numbers*3
}
console.log(triple(8));

//another expression
const doubleIt = function doubleTrouble(numb){
    return numb*2;
}
console.log(doubleIt(1000));

//arrow function

//single parameter
const square = (num) => num *num;
console.log(square(3));

//multiple parameter
const sum = (x,y) => x+y;
console.log(sum(5,6));

//without parameter
const roll = () => 7;
console.log(roll());

//bigger arrow function with multiple line
const doMath = (a,b) =>{
    const sum = a+b;
    const diff = a-b;
    const result = sum*diff;
    return result;
}
// console.log(doMath(3,2));
//or
const finalResult = doMath(7,0);
console.log(finalResult);