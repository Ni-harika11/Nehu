// variables used for store the data
// string,number,boolean,object...
// using var,let,const
// let and const keyword introduced in ES6
// syntax:
//      var/let/const variableame=value;

var var_one="Hello"
console.log(var_one)

// var 123abd="Welcome"
var abc23;
var ab$22;
// var avb$22;
var _123;


//numbers
// decimal, float (or) double,hexadecimal,octal,binary
//hexadecimal numbers will prefix with "0x"
//octal numbers will prefix with "0o"
//binary number will prefix with "0b"
var decimalNum=100;
var doubleNum=200.3321;
var hexadecimalNum=0xABCD;
var octalNum=0o2331;
var binaryNum=0b1101;
console.log(
    decimalNum,
    doubleNum,
    hexadecimalNum,
    octalNum,
    binaryNum
)

//boolean
var flag=true
console.log(flag)
console.log(1+true)
console.log(true+true)
console.log(true-false)
console.log("1"+true)

var x=false;
x==true? console.log('helo'):console.log("Bye");

//string
//collection of characters called  as "strings"
//"",'',``(backtik)
//``(backtick) operators introduced
//``(backtick) operators caleed as templates literal
//``(backtick)operators used to define the "paragraph"

var sub="Javascript"
var wish=`Welcome to ${sub}`
console.log(wish)

var sub_one="ReactJS"
var sub_two="NodeJS"
var sub_three="MongoDB";
var merstack=`${sub_one} ${sub_two} ${sub_three}`
console.log(merstack)


var tbl_name="Employees";
var sal=50000;
var sql_query1=`select * from${tbl_name} where esal >${sal}`
console.log(sql_query1)

var uname="admin"
var upwd="admin123";
var sql_query2=`select * from ${tbl_name} where uname${uname}  where upwd${upwd} `;
console.log(sql_query2)

var mern=`MERN Stack Means
          ****************
          frontend=${sub_one}
          ==================
          backend=${sub_two}
          ==================
          frontend=${sub_three}`
console.log(mern)


//Data types 
// String
// number
// Boolean
// undefined
// null
// bigint
// Symbol
var x1;
console.log(x1)//undefined


x1=null;
console.log(x1)//null

//==(job)
//===(job and work)
console.log(undefined==undefined)//true
console.log(undefined===undefined)//true
// true

console.log(null==null);// true
console.log(null==null)// true
console.log(undefined==null)// true
console.log(undefined===null)// false


//gibint
//if suffix with "n"
// (greater than)> 2^53-1
var bigint="632637829923948390489387548391029384765467382938476537298376463983765438293876"
console.log(bigint)
function nameprint(name) {
    console.log(name)
}
nameprint("nehu")


//typeof operators
console.log(typeof "hello");
console.log(typeof 100);
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)
console.log(typeof[])
console.log(typeof 1n);


console.log(1n+2n)
// console.log(1+2n)//TypeError
console.log(1n / 1n);
// console.log(1 / 1n) TypeError