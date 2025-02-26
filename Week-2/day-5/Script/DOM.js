// const body=document.body;
// // body.append("hello")
// // body.append("dnvjfnnvfcn")
// // const div=document.createElement("div");
// // div.innerText="Hello_1";
// body.append("Hello_1");
// const div=document.createElement("div")
// div.innerText="Hello_2";
// body.appendChild(div)/////Hello_2
// body.append(div)
///////////////////////
// append()===text and Element
// appendchild()===Element
///////////////////////
// // const divs=document.createElement("div")
// divs.innerText="Hello_3";
// body.appendChild(divs)
// body.append(divs)
// const dive=document.createElement("div");
// dive.innerText="Hello_4";
// body.appendChild(dive)
// body.append(dive)
//////////////////
// const body=document.body;
// body.innerText="Hello_1"
// const div=document.createElement("div")
// div.innerText="Hello_2";//not show
// div.textContent="Hello_3";//show it
// body.append(div)
///////
// const div=document.querySelector("div");
// const divs=()=>{
      
     
//      return div.innerText
// }
// console.log(divs())
// const dives=()=>{
//     return div.textContent
// }
// console.log(dives())
////or////
// const div=document.querySelector("div")
// const dive=()=>div.innerText;
// const getTextConte=()=>div.textContent;
// console.log(dive());
// // console.log(getTextConte())
// ///////
// const body=document.body;
// const div=document.querySelector("div")
// div.innerText="<h2>Hello</h2>";
// body.innerHTML="<h1>Hello</h1>";
// body.append(div)
// body.append(div)
/////////////
// const h1=document.createElement("h1")
// h1.innerText="Hello_1";
// const h2=document.createElement("h2")
// h2.innerText="Hello_2";
// const h3=document.createElement("h3")
// h3.innerText="Hello_3";
// const body=document.body;
// body.append(h1)
// body.append(h2)
// body.append(h3)
///////////
// const div=document.createElement("div")
// const span=document.createElement("span")
// const strong=document.createElement("strong")
// strong.innerText="Heloo"
// span.append(strong)
// div.append(span)
// const body=document.body;
// body.append(div)
//////////////
// const div=document.querySelector("div");
// console.log(div.textContent)
// console.log(div.innerText)
//////////
// const body=document.createElement("body")
// const span=document.createElement("span");
// span.innerHTML="</h1>Heloo</h1>";
// // span.innerText="Heloo_1";

// body.append(span)

// // const html=document.html;
// const html=document.querySelector("html")
// // html.append(html)
// html.append(body)
////////////
// const div=document.querySelector("div")
// const span1=document.querySelector("#sp1")
// const span2=document.querySelector("#sp2");
// ////to remove span 
// span1.remove();
// span2.remove();
// div.append(span1);
// div.append(span2);

////2nd soliutions from div
// div.removeChild(span1);
// div.removeChild(span2);
////////access attributes
//old solutions
// console.log(span1.getAttribute("id"))
// console.log(span1.getAttribute("title"))
///current solutions
// console.log(span1.id)
// console.log(span1.title)
//////////////////////////
// span1.setAttribute("key","value")
// console.log(span1.getAttribute(key));
///////////////
// span1.key1="value1"
// span2.key2="value2"
// //remove
// span1.remove('id')
// span2.remove("title")
// span2.remove("id")
////////////
// const h1=document.querySelector("h1")
// console.log(h1.dataset)
// console.log(
//     h1.dataset.text1,
//     h1.dataset.text2
// );
// console.log(h1.dataset.text3="Hello_3");
////////////////////////////////////////////
//gparent,parents ,child
// document.querySelector(".gparent").style.backgroundColor="green";
// // document.querySelector(".parent").style.backgroundColor="yellow";
// Array.from ( document.querySelectorAll(".parent")).forEach((Element,index)=>{
//     Element.style.backgroundColor="salmon"
// });
// const p1= document.querySelector("#parent1");
// p1.style.backgroundColor="purple"
// console.log(p1.chlidren[0])
// const child= document.querySelectorAll(".child")

////////////////////////////////////////////
// const p1=document.querySelector(".parent")
// p1.style.backgroun="red";
// let childrens= p1.children;
// for(let c of childrens){
//     c.style.backgroundColor="grey"
//     console.log(c)
// }
///////
// const p2=document.querySelector("#parent")
// const c3=p2.querySelector("#c3");
// const c4=c3.nextElementSibling;
// c4.style.backgroundColor="red";

// c4.previousElementSibling.style.backgroundColor="green";

// c3.parentNode.style.backgroundColor="grey";
// c4.parentNode.style.backgroundColor="yellow"

// console.log(c4.closest(".gparent").style.backgroundColor="yellow")
////////////////////////////////////////////
// const p2=document.querySelector("#parent");
// const c4=p2.querySelector("#c4")
// c4.previousElementSibling.style.backgroundColor="red";
// c4.closest("#parent2").style.backgroundColor="pink";

// c4.previousElementSibling.closest("#.gparent").style.backgroundColor="yellow";
// ////////////////////////////////////////////
// document.getElementsByTagName("p")[0].innerHTML="<strong>Hello</strong>"

// ////////////////////////////////////////////\
// ////////////////////////////////////////////
// ////////////////////////////////////////////