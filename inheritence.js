class Parents {
  constructor() {
    this.fatherName = "Alam";
    this.fatherAge = 50;
  }
}
class Daughter extends Parents{
  constructor(childName, childAge) {
    super()
    this.name = childName;
    this.age = childAge;
  }

fullDetails(){
    return  this.fatherName + ' is '+ this.fatherAge + '. And '+ this.name + ' is '+this.age;
}
}
const Daughter1 = new Daughter("Sana",24);
const Daughter2 = new Daughter("Erin", 20);

console.log(Daughter1.fullDetails());
console.log(Daughter2.fullDetails());
