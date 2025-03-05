
class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(` Hello , my name is ${this.name} and I am ${this.age} years old.`)
    }

}
const person1=new Person("Alice",25);
person1.greet()



 class   Employee extends Person{
    role:string;

    constructor(name:string,age:number,role:string){
        super(name,age);
        this.role=role;
    }
    showRole(){
        console.log(`${this.name} `)
    }
}

const emp=new Employee("nnn",56,"software")
emp.greet();
emp.showRole()

