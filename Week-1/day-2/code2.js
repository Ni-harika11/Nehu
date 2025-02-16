//String .prototype.anchor()
// const contentString="Hello , world";
// console.log(document.body.innerHTML=contentString.anchor('hello'))

//or we can create that
// const contentStrings="Hello, world";
// const elem=document.createElement('a');
// elem.innerHTML=contentStrings;
// var res=document.body.appendChild(elem)
// console.log(res)
//String.prototype.at()
const sentence="The quick brown for jumps over the lazy dog";
let index=5;
console.log(`An index of ${index} returns the charaters ${sentence.at(index)}`);
index=-4;
console.log(`An index of ${index} return the character ${sentence.at(index)}`);

// String.prototype.charAt()
const sentenc="The quick brown fox jumps over the lazy dog";
const indexe=4;
console.log(`The character at index ${indexe} is ${sentenc.charAt(indexe)}`)
console.log(`The charcter at index 0 is '${sentenc.charAt(0)}'`)

//1 quetsions(What does "JavaScript".charAt(4) return?)
console.log('JavaScript'.charAt(4));
//2 qustions(What happens if you use a negative index, like
//  "Hello".charAt(-1)?)
console.log('Hello'.charAt(-1));
//3 questions(How can you get the last character of a
//  string using charAt()?)
// console.log("Javascript".charAt())
let str="Heloo";
let lastchar=str.charAt(str.length-1);
console.log(lastchar)
//4 questions(What is the difference between charAt(0)
//  and charAt(100) on a string of length 5?)
let va="Hello";
console.log(va.charAt(0));//H
console.log(va.charAt(100));// space ae a result

//5 questions(How can you loop through a string 
// and print each character using charAt()?)
var  res="d print each character using";
for (let i=0;i<=res.length;i++){
    console.log(res.charAt(i))
}
////////📌 charCodeAt() Questions
//1 quetsions (What does "ABC".charCodeAt(0) return?)
console.log('ABC'.charCodeAt(0));
console.log('ABC'.charCodeAt(2));

//2 questions(How can you find the Unicode 
// value of the last character in a string?)
console.log("ABCDEF".charCodeAt("ABCDEF".length-1));
//3 questions(What is the Unicode value of the space character " "?)
console.log(" ".charCodeAt(0))

 