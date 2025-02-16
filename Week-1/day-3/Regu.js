// How to createa a set
const letter=new Set(['a','b','c']);
//add ()
letter.add('E');
letter.add('ES')
let text=" ";
for (const x of letter){
    
    text +=x;
}
console.log(text)

// //JavaScript Statements Reference
// document.addEventListener("DOMConetntLoaded",function(){
//     var demo=document.getElementById('para');
//     demo.innerHTML="Hello Dolly";

//     console.log(demo.innerHTML)
// });

//String.prototype.match()
const parg="The quick brown fox jumps over the lazy dog. It barked.";
const regex=/[A-Z]/g;
const found=parg.match(regex)
console.log(found)       