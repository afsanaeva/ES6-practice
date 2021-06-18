const person ={ name:'Afsana',job:'Engineer',mobile:123456,id:23, age:23}

//old way to get property from object
// const personAge = person.age;
// console.log(personAge);
// console.log(person.age);

//destructure way
const{age,name,job} =person;
console.log(age,name ,job);
//array destructure way
const fruits =['mango','berry','banana','orange']
const[summerFruit,...winterFruits]=fruits;
//console.log();
// const[]=fruits;
console.log(summerFruit,winterFruits);

//nested object destructure
const stuff={id:1,info:{
    name:'jamal',
    mob:09292
}}
const{mob}=stuff.info;
console.log(mob);
