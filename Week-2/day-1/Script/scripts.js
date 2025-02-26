// const val=document.getElementById('para').innerHTML="Heelooo";
// console.log(val)
// const ele=document.getElementsByTagName('h1')
// console.log(ele)

// const x=document.getElementById('main');
// const y=x.getElementsByTagName('p')
// console.log(x)
// console.log(y)

// const same=document.getElementsByClassName('box')
// console.log(same)

// const inner=document.getElementById('para').innerHTML="Hello";
// console.log(inner)

// const nesw=document.getElementById("h2").innerHTML="neww data";
// console.log(nesw)

// const att=document.getElementById("myimeage").src="new.gpj";
// console.log(att)

// const time=document.getElementById('demo').innerHTML="Date:"+ Date();
// console.log(time)

// const vai=document.write(Date());
// console.log(vai)




//  1 Create a H2 heading elemnts with text -"Hello JavaScript". Append "Niharika" to this text using JS.
// let h2=document.querySelector('h2') ;
// console.dir(h2.innerText)
// h2.innerText=h2.innerText + "from Niharika";
// console.log(h2.innerText)

// //2 Create 3 divs with common class name -"box". Acess them and add some unique text to each of them.
// let divs=document.querySelectorAll(".box");
// // divs[0].innerText="New first one"
// // divs[1].innerText="sencond one ";
// // divs[2].innerText="Third one new";
// // Access by For loop
// for (div of divs){
//     // console.log(div)
//     div.innerText="new uniq values"
// }
// console.log(divs[0])
// var x=document.getElementById('box').nodeType;
// var docum=document.getElementById('demo')
// console.log(x)

// ///firstchildenode
// var po1=document.getElementById("para-01");
// console.log(po1.firstChild.nodeName)//#text

// const po2=document.getElementById('para-02');
// console.log(po2.firstChild.nodeName)//span
// const po3=document.getElementById('para-02');
// console.log(po3.firstElementChild.nodeName)

// var lst=document.getElementById('lit');
// console.log(lst.firstElementChild.textContent)//first

// //lastElemntChild
// //1 questions
// var list=document.getElementById("mylist");
// console.log(list.firstElementChild); 
// console.log(list.lastElementChild);
// //2 questions
// var cont=document.getElementById("container");
// console.log(list.firstElementChild); 
// console.log(list.lastElementChild);
//3 questions
// var change=document.getElementById('box');
// console.log(change.firstElementChild.innerText="first update") 
// console.log(change.lastElementChild.innerText="last update") ;
//4 questions
// var add=document.getElementById('list');
// console.log(add.firstElementChild.classList.add("highlights"));
// console.log(add.lastElementChild.classList.add("highlights"));
// console.log(add.lastElementChild.setAttribute())

// let nebtn=document.createElement('button');
// nebtn.innerText="click me"
// console.log(nebtn)
// let div=document.querySelector("div");
// console.log(div.append(nebtn));
// console.log(div.prepend(nebtn));
// console.log(div.before(nebtn));
// console.log(div.after(nebtn));
/////add heading
// let newheading=document.createElement("h1");
// newheading.innerHTML="<bold>Hi i am new heading</bold>";

// document.querySelector("body").prepend(newheading)

////20 qurstions
// let btn=document.createElement("button");
// btn.innerText="click me";

// btn.style.color="white";
// btn.style.backgroundColor="red";

// document.querySelector("body").prepend(btn);

//21 questions
//How would you select the div element with the ID 'div-id' using querySelector()?
// var div=document.querySelector("div-id");

///////////
// function checkwin() { 
//     if (!mywindow){
//         text="it has never been open";
//     }
//     else{
//         if(mywindow.closed){
//             text="It is closed";
//         }
//         else{
//             text="it is open";
//         }
//     }
//  }
//22 questions 
// var rem=document.getElementById("list");
// rem.removeChild(rem.firstElementChild);
// console.log(rem)
// //23 questions
// var lst=document.getElementById('list');
// if(lst.hasChildNodes()){
//     lst.removeChild(lst.children[0])
// }
//24 questions
// var  dire=document.body.dir;
// document.getElementById('mylsit').innerTHTML=dire;
// console.log(dire)
//25 questions
// let text=document.getElementById("mydiv").firstChild.nodeName;
// console.log(text)
//26 questions selectors
var bt =document.querySelector("div");
console.log(bt)
//27 questions slecstor
// var cls=document.querySelector(".menu-item");
// console.log(cls)
// //28 questions
// var non=document.querySelector(".non-existent-class")
// console.log(non)
//29 questions
var all=document.querySelectorAll("div");
console.log(all)
//30 questions
var menu=document.querySelectorAll(".menu-item");
console.log(menu)
//31 questions
// eturns only the first matching element in the document.

// returns a NodeList of all matching elements.
//32 questuons
var a=document.getElementsByTagName('p')
console.log(a)