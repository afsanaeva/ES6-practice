const age1= [1,33,44,5,6,7];
const age2 = [12,3,56,77,86,71];
const allAge = age1.concat(age2);
console.log(allAge);

const age3 =[ 13,34,23,31,76,57];
const age4 =[2,3,4,];
const allAge1 = allAge.concat(age3).concat([300000]).concat(age4);
console.log(allAge1);

//three dots way
const allAge3 =[...age1, ...age2,...age3,...age4]
console.log(allAge3);

//Maximum num
const A = 450;
const B = 500;
const C = 600;

const maximum = Math.max(A,B,C);
console.log(maximum);
//three dots way maximum
const num =[100,344,55,6666,77,88888,00,11111];
const largest = Math.max(...num);
console.log(largest);