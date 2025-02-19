// let jsonExp='{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// // console.log(typeof jsonExp);
// //Convert a json text to JavaScript object
// // let obj=document
// const obj=JSON.parse(jsonExp);
// console.log(obj)
// console.log()
// //Random number generate
// // let rand=document.getElementById("rand")
// // function Add() {
// //   document.getElementById("rand").innerHTML=Date()+Math.random();

// //   }
// // function displatDate(){
// //   document.getElementById("rand").innerHTML=Date();
// // }


function clickCounter(){
  if(localStorage.clickcount){
    localStorage.clickcount = Number(localStorage.clickcount)+1 ;
    
  }else{
    localStorage.clickcount= 1 ;
  }
  document.getElementById("demo").innerHTML=localStorage.clickcount;
}
clickCounter();
 
let a="123";
let ar=a.split("")
let fr=Array.from(a)
let mp=Array.from(a,char => char.toUpperCase());
console.log(mp)
console.log(fr)
console.log(ar)
console.log(Number(a))
let fruits=['apple','banana','cheerry'];
console.log(fruits[0])
console.log(fruits[1]);
console.log(fruits[2]);
//add elemnts to an array.
let fruit=['apple'];
fruit.push("cherrry");//adds to the end
fruit.unshift("mangoo")//add this to the beginning
console.log(fruit)
///////remove element from an array 
let fruiT=['apple','banana','cherry']
fruiT.pop();//remove last elemets
console.log(fruiT);
fruiT.shift();//remove apple from the beginning
console.log(fruiT)
//length of array
console.log(fruiT.length)
///////To check is array or not
// let fruits=['apple','banana','cherry']
console.log(Array.isArray(fruits));
let notArrya="apple";
console.log(Array.isArray(notArrya));
//How do you iterate over an array?
// let  fruits=['apple','banana','cherry']
for (let i=0;i < fruits.length; i++){
  console.log(fruits[i]);
}
///How do you use the forEach method
// let  fruits=['apple','banana','cherry']
fruits.forEach((fruits,index) => {
  console.log(`fruits at index ${index} is ${fruits}`);
});
//. How do you concatenate two arrays?
// let fruits=['apple','banana'];
let moreafruits=['cherry','mango'];
let allfruits=fruits.concat(moreafruits);
console.log(allfruits);

let allfruit=[...fruits,...moreafruits];//functions arguments
console.log(allfruit)
////How does the filter method work?
let number=[1,2,3,4,5,6];
let evennumber=number.filter(num => num % 2 ==0);
console.log(evennumber);
/////////
let A="123"
let res=A.replace("2","5")
console.log(res)
let sp=A.split("");
// console.log(sp)
// let ad=sp.replace(2,5)
// sp.splice(1,2)
console.log(sp)
///1 :reverse number
function reverse_number(n) {
  n=n + " ";
  return n. split("").reverse().join("");
  }
console.log(Number(reverse_number(32243)));
///2 Palindrome
function check_palindrom(str_entry){
  var cstr=str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+ /g, '');
  var ccount=0;
  if(cstr===""){
    console.log("nothing found");
    return false;
  }
  if ((cstr.length)%2==0){
    ccount=(cstr.length)/2;

  }else{
    if(cstr.length===1){
      console.log("entery is a plindrom");
      return true;
    }else{
      ccount=(cstr.length-1)/2;
    }
  }
  for(var x=0;x < ccount; x++){
    if(cstr[x]!=cstr.slice(-1-x)[0]){
      console.log("enter is not a palindrom.");
      return false;
    }
  }
  console.log("the entry is palindrom.");
  return true;
}
check_palindrom('madam');
check_palindrom("nurserun");
check_palindrom("fox")
////////string combinations
function substrings(str1){
  var array1=[];
  for(var x=0,y=1;x < str1.length;x++,y++){
    array1[x]=str1.substrings(x,y);
  }
  var combi=[];
  var temp="";
  var slent=Math.pow(2,array1.length);
  for(var i=0;i<slent;i++){
    temp='';
    for(var j=0;j<array1.length;j++){
      if((i & Math.pow(2,j))){
        temp +=array1[j];
      }
    }
    if(temp!=="")
    {
      combi.push(temp)
    }
  }
  console.log(combi.join("\n"));
}
substrings("dog");

//capitalize
function uppercase(str) {
  var array1=str.split(' ');
  var newarray=[];
  for(var x=0;x<array1.length;x++){
    newarray.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));

  }
  return newarray.join(' ')
  }
  console.log(uppercase("the quick brown fox"));
//random string
function makeid(l){
  var text="";
  var char_list="ABCDE123243830knmd dsmmkesdhdvkd";
  for (var i=0; i < l;i++){
    text +=char_list.charAt(Math.floor(Math.random()*char_list.length));
  }
  return text;
}
console.log(makeid(8))

//////////
function getFormvalue(){
  var x=document.getElementById("form1");
  for(var i=0; i < x.length; i++){
    if(x.elements[i].value!='submit'){
      console.log(x.elements[i].value);
    }
  }
}
//background color change
function set_background(){
  docBody=document.getElementsByTagName("body")[0];
  mybodyElmets=document.getElementsByTagName('p');
  myp1=mybodyElmets[0];
  myp1.style.background="rgb(255,0,0)";
  myp2=mybodyElmets[1];
  myp2.style.background="rgb(255,255,0)"
}