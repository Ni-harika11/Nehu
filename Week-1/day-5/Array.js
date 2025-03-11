//Array Constructor
var ar=[];
console.log(ar)
//1.questions()//
//What does the constructor property return for an array?
//The function that created the Array prototype
//2 questions()
//How can you use the constructor property to check if a variable is an array?
//if variable constructor ===Array

//3 questions
//Can the constructor property be modified? If so, how?
//4 questions
//What is the default constructor for an array in JavaScript?



//Length
//How does the length property of an array change when you add elements?
let arr=[1,2,3];
console.log(arr.length);
arr.push(10)
console.log(arr)
arr[3]=20;
console.log(arr)
//from()
var let="Hwllo this is my code";
console.log()

function mainFunction(callback) {
    console.log("Main function executed.")
    callback()
  }
// function greet(name){
//     console.log("Hello,"+name);


// }
// greet("Alice", () =>{
//     console.log("welcome!")
// });
function greet(name) {
    console.log("Hello,"+name);
    console.log("Welcome!");
  }
  const users = [
    {
      id: 1,
      name: "Charlie Davis",
      age: 28,
      email: "john.doe@example.com",
      address: "123 Main St, Anytown, USA",
      phone: "555-1234",
      isActive: true,
      role: "admin",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-10"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 34,
      email: "jane.smith@example.com",
      address: "456 Elm St, Othertown, USA",
      phone: "555-5678",
      isActive: false,
      role: "user",
      createdAt: "2023-02-01",
      updatedAt: "2023-02-10"
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 25,
      email: "alice.johnson@example.com",
      address: "789 Oak St, Sometown, USA",
      phone: "555-8765",
      isActive: true,
      role: "user",
      createdAt: "2023-03-01",
      updatedAt: "2023-03-10"
    },
    {
      id: 4,
      name: "Bob Brown",
      age: 45,
      email: "bob.brown@example.com",
      address: "101 Pine St, Anycity, USA",
      phone: "555-4321",
      isActive: false,
      role: "moderator",
      createdAt: "2023-04-01",
      updatedAt: "2023-04-10"
    },
    {
      id: 5,
      name: "Charlie Davis",
      age: 30,
      email: "charlie.davis@example.com",
      address: "202 Maple St, Anyville, USA",
      phone: "555-6789",
      isActive: true,
      role: "user",
      createdAt: "2023-05-01",
      updatedAt: "2023-05-10"
    }
  ];
function agesCheck(age){   
    if (age>30){
        console.log(users)
    }
}

agesCheck(users)

 