class Student {
    constructor(isId,isName){
        
        this.id= isId;
        this.name =isName;
        this.school ="Southeast University";
        this.address ="tongi, Gazipur";
    }
}

const student1 = new Student(20,"eva");
const student2= new Student(30, "afsana");
console.log(student1,student2);
console.log(student1.name);
console.log(student2.id);

//another class

class Stuff{
    constructor(stuffName,stuffDesignation,stuffAge,stuffMobile,stuffEmail){
        this.name = stuffName;
        this.job =stuffDesignation;
        this.age=stuffAge;
        this.mobile=stuffMobile;
        this.email= stuffEmail;

    }
    
}

const stuff1 = new Stuff('Rita','cook',23,0192993,'wer@mail.com');
const stuff2 = new Stuff('Era','doctor',34,0191283,'asfe@gmail.com');

console.log(stuff1, stuff2);

