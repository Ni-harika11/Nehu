// //String.prototype.charCodeAt()
// const line="Hello metjhods so beautiful!."
// const index=8;
// console.log(`The values ${line.charCodeAt(index)} `);

// //String.prototype.concat()
// const val1="Hello";
// const val2="Niharika";
// console.log(val1.concat(" ",val2));
//  const hello="Hello,";
//  console.log(hello.concat("Kevin",".Have a nice day."));

// const greetlist=["Hello"," ","Venjkat","!"];
// console.log(" ".concat(...greetlist))
// console.log(" ".concat([]))

// // String.prototype.endsWith()

// const val="Hello NIharika how are u."
// console.log(val.endsWith('.'))
// console.log(val.endsWith('u'));
// // String.prototype.startswith()

// console.log(val.startsWith('H'));
// console.log(val.startsWith('h'));

let myfunctions=(a,b) => a*b;
console.log(myfunctions(5,6))

// function myFunction(a,b){
//     return a*b;
// }
// console.log(myFunction(3,4))
// const users = [
//     {
//       id: 1,
//       name: "Charlie Davis",
//       age: 28,
//       email: "john.doe@example.com",
//       address: "123 Main St, Anytown, USA",
//       phone: "555-1234",
//       isActive: true,
//       role: "admin",
//       createdAt: "2023-01-01",
//       updatedAt: "2023-01-10"
//     }
// {
//     id: 2,
//     name: "Jane Smith",
//     age: 34,
//     email: "jane.smith@example.com",
//     address: "456 Elm St, Othertown, USA",
//     phone: "555-5678",
//     isActive: false,
//     role: "user",
//     createdAt: "2023-02-01",
//     updatedAt: "2023-02-10"
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     age: 25,
//     email: "alice.johnson@example.com",
//     address: "789 Oak St, Sometown, USA",
//     phone: "555-8765",
//     isActive: true,
//     role: "user",
//     createdAt: "2023-03-01",
//     updatedAt: "2023-03-10"
//   },
//   {
//     id: 4,
//     name: "Bob Brown",
//     age: 45,
//     email: "bob.brown@example.com",
//     address: "101 Pine St, Anycity, USA",
//     phone: "555-4321",
//     isActive: false,
//     role: "moderator",
//     createdAt: "2023-04-01",
//     updatedAt: "2023-04-10"
//   },
//   {
//     id: 5,
//     name: "Charlie Davis",
//     age: 30,
//     email: "charlie.davis@example.com",
//     address: "202 Maple St, Anyville, USA",
//     phone: "555-6789",
//     isActive: true,
//     role: "user",
//     createdAt: "2023-05-01",
//     updatedAt: "2023-05-10"
//   }
// // ];

let Nums=[2,4,6,8,7,9,10]
const evenNumm=(Nums)=>{
    for (let num of Nums){
        if (Nums%2==0){
            console.log(num+"Even Numbers");
        }
    }
}


let code=[10,20,40,30,10,20]
const oddeven=(code)=>{
    for (let dat of code){
        if(code%2!=0){
            console.log(dat + "Odd numbers");
        }
    }
}

//Array.prototype.filter()
//1 questions
const words=["spray","elite","exuberant","destruction","present"];
const result=words.filter((word)=>word.length>6);
console.log(result) 

//1 questions
const word=["Apple","Banana","Avocado","Mango","apricot"];
const val=word.filter((w)=>w[0] === 'A'  || w[0]==="a");
console.log(val)
///2 questions
const sentences = [
    "I love JavaScript!",
    "Python is also great.",
    "JavaScript is versatile.",
    "Coding is fun!"
];
const sent=sentences.filter((sentences)=>sentences.includes("JavaScript"));
console.log(sent)
///3 questions
const strings = ["Hello", "", "World", " ", "JavaScript", ""];
const re=strings.filter((str)=>
     str.trim()!=="");
console.log(re)

//4 questions
const wordS = ["apple", "banana", "cat", "elephant", "dog"];
const filteredWords=wordS.filter((ww)=>ww.length>=5);
console.log(filteredWords)     

 