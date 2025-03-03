// function greet(person:{name:string,age:number}){
//     return "Hello"+person.name;
// }
// interface Person{
//     name:string;
//     age:number;
// }
// function greet(person:Person){
//     return "Hello" +person.name
// }
//alias
// type Person={
//     name:string;
//     age:number;
// };
// function greet(person:Person){
//     return person.name;
// }
//
interface Home{
    readonly resident:{name:string;age:number};
}

function visitForBirthday(home:Home){
    console.log(`${home.resident.name}!`)
    home.resident.age++;
}

function evict(home:Home){
    home
}