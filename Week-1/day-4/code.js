const greet=()=>
    console.log("Hello world");
greet();

const add=(a,b)=>a+b;
console.log(add(5,3));

const sub=(a,b)=>a-b;
console.log(sub(10,5));

const square =num=>num * num;
console.log(square(4));

const multiply=(a,b)=>{
    let result=a*b;
    return result;
};
console.log(multiply(2,2));

const person=(name,age)=>({name:name,age:age});
console.log(person("Alice",25));

const numbers=[1,2,3,4,5];
const squares=numbers.map(num=>num*num);
console.log(squares)

const Additions=(a,b)=>a+b;
console.log(Additions(10,10));
function Add (a,b){
    return a+b;
}
console.log(Add(10,20));
//1 questions
const multiplyByTwo=(num)=>num*2;
console.log(multiplyByTwo(5))
//2 questions
const Numbers=[1,2,3,4,5];
const newArray=(Numb)=>Numb.map(Math.sqrt);
console.log(newArray)
//3 questions
const Arrofunctions=(name,age)=>({name:name,age:age});
console.log(Arrofunctions("niharika",21));
//4 questions
const NUMBERS=[10,15,20,25,30,35];
// const OddNumbers=(NUM)=>NUM.NUMBERS%2!=0;
const OddNumbers=(arr)=>arr.filter(num =>num%2!==0);
console.log(OddNumbers(NUMBERS));
//1 questions
const isEven=(a)=> a%2===0;
console.log(isEven(10))
//2 questions
const colors=['red','blue','green'];
const ArorwFnctions=(arr)=>(arr.forEach(color=>console.log(color)));
console.log(ArorwFnctions(colors))
//3 questions
const Pord=(title,price) =>({title,price});
console.log(Pord("Laptop",50000));
//4 questions
const numbe=[5,10,15,20];
const TotalValue=(arr)=>(arr.reduce((acc,num)=> acc + num,0));
console.log(TotalValue(numbe));
//5 questions
const Values=[30,45,60,75,90];
const Greater=(arr)=>arr.find(num=> num >50);
console.log(Greater(Values));

//1 questions
const cube=num=>num* num * num;
console.log(cube(3))
//2 questions
const numbersVal=[10,55,70,25,90];
const GetVal=(arr)=>arr.filter(n => n > 50);
console.log(GetVal(numbersVal))
//3 questions
const Stude=(name,subject,marks)=>({name,subject,marks});
console.log(Stude("Niharika","Math",95));
//4 quetsions
//skipe
//5 questions
const values=[10,-5,20,30,-15];
const NegVal=(arr)=>arr.some(n => n < 0);
console.log(NegVal(values))
/////////////////////////////
const button=document.querySelector('#changeText');
function newTest(event){
    const p=document.querySelector('#myParagraph');
    p.innerText='The text has been changed'
}
console.log(button.addEventListener('click',newTest));

////////////
document.addEventListener('mousedown',event =>{
    console.log(`the mouse is pressed`)
});

document.addEventListener('mouseup',event =>{
    console.log(`tHe mouse is relaed`);
});
/////////////////////////////////////
document