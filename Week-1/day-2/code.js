// const person=new Object();
// person.firstname="nehu";
// person.lastname='doe';
// person.age=33;
// person.eyecolor="blue";
// console.log(person)

 //Strings

 const string1="A string primitive";
 const string2="Also a string primitive";
 const string3="Yet another strings";
 const string4=new String("As we know this strings");

//charAt()
console.log('cat'.charAt(1))//anser=a

const a='a'
const b='b'
if (a>b){
    console.log(`${a} is greater than ${b}`)
}
else if(b>a){
    console.log((`${b} is greater than of ${a}`));
}
else{
    console.log(`${a} and ${b} are both equal.`)
}

/////////////////
const areEqualCaseInsensitive = (str1,str2) =>
    str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase=(str1,str2)=>
    str1.toLowerCase() === str2 . toLowerCase()


console.log(areEqualCaseInsensitive('hell','byyy'));
console.log(areEqualInLowerCase('lo','DD'))

const areEqual=(str1,str2,locale="en-US") =>
    str1.localeCompare(str2,locale, {sensitivity:"accent"}) ===0;

console.log(areEqual("B","ss",'de'));
console.log(areEqual('1',"I","tr"));

//String primitive and String objects

const strPrim="foo";
const strPrim2=String(1);
const strPrim3=String(true)
const strObj=new String(strPrim);

console.log(typeof strPrim)
console.log(typeof strPrim2)
console.log(typeof strPrim3)
console.log(typeof strObj)

////////////////
const s1="2 + 2";
const s2=new String("2 + 2");
console.log(eval(s1))
console.log(s2)

console.log(eval(s2.valueOf()))

console.log(String.fromCharCode(189,43,190,61))
console.log(String.fromCharCode(65,66,67));
console.log(String.fromCharCode(0x2014));
console.log(String.fromCharCode(8212));

console.log(String.fromCharCode(55356,57091));
console.log(String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07));

//String.fromCodePoint(num)
//num is optional
console.log(String.fromCodePoint(42));
console.log(String.fromCodePoint(65, 90)); // "AZ"
console.log(String.fromCodePoint(0x404)); // "\u0404" === "Є"
console.log(String.fromCodePoint(0x2f804)); // "\uD87E\uDC04"
console.log(String.fromCodePoint(194564)); // "\uD87E\uDC04"
console.log(String.fromCodePoint(0x1d306, 0x61, 0x1d307)); // "\uD834\uDF06a\uD834\uDF07"

//String.raw()
//String.raw(strings,num1..)
console.log(String.raw `Hi\n${2+3}!`);
console.log(String.raw`Hi\u000A!`);

const names="Niharika";
console.log(String.raw`Hi\n${names}`)

console.log(String.raw`Hi\${names}`);