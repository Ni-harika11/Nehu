// ///Weeekend Practies////
// let obj={
//     "sub_one":"ReactJS",
//     "sub_two":"NodeJS",
//     "sub_three":"MongoDB"
// };
// const Jobj=()=>{
//     console.log(obj.sub_one);
//     console.log(obj.sub_two);
//     console.log(obj.sub_three);
// }
// Jobj()
// /////
// let newobj={
//     "obj1":{"key1":"value1"},
//     "obj2":{"key2":"value2"},
//     "obj3":{"key3":"value3"}
// }
// const newjson=()=>{
//     console.log(newobj.obj1)
//     console.log(newobj.obj1.key1);
//     console.log(newobj.obj2.key2);
//     console.log(newobj.obj3.key3)
// }
// newjson()
// //////
// let  twobj={
//     "key1":"Hello_1",
//     "key2":"Hello_2",
//     "key3":"Hello_3",
//     "key4":"Hello_4"
// };
////iterate the json object
//ES6
//for ....in loop
// const iter=()=>{
//     for(let k in twobj){
//         console.log(k,":",twobj[k])
//     }
// }
// iter()
//////
// let objet={
    // "obj1":{
    //     "key1":"Hello_1",
    //     "key2":"Hello_2",
    //     "key3":"Hello_3",
    //     "key4":"Hello_4"
    // }
// }
// const inerobject=()=>{
//     for (let key in objet.obj1){
//         console.log(objet.obj1[key])
//     }
// }
// inerobject()
//////
// let obj={
//     "oracle":oracle,
//     "mysql":mysql,
//     "mongoDb":mongoDb,
//     "cassndradb":cassndradb
// }
// function oracle(){
//     return "oracale connections soon....."
// }
// function mysql() {
//     return "mysql connections soon....."
// }
// function mongoDb(){
//     return "mongodb connections soon....."
// }
// function cassndradb() { 
//     return "cassandrabd connections soon...."
// }
// console.log(obj.oracle(),obj.mongoDb(),obj.mysql(),obj.cassndradb());
//////
//arrow functions
// let obj={
//     "key1":()=>{return "hello_1"},
//     "key2":()=>{return "hello_2"},
//     "key3":()=>{return "hello_3"}
// }
// console.log(obj.key1())
// console.log(obj.key2())
// // console.log(obj.key3())
// //////////////
// let obj={

        // "key1":"Hello_1",
        // "key2":"Hello_2",
        // "key3":"Hello_3",
        // "key4":"Hello_4"
    
// }
// const Objec=()=>{
//     return Object.values(obj)
// }
// console.log(Objec())
// /////
// let obj={}
  

// const data=()=>{
//     obj.key1="Hello_1",
//     obj.key2="Hello_2",
//     obj.key3="Hello_3",
//     obj.key4="Hello_4"
//     return obj
// }
// console.log(data())
///////////////
// let obj={
//         "key1":"Hello_1",
//         "key2":"Hello_2",
//         "key3":"Hello_3",
//         "key4":"Hello_4"
// };
// const dat=()=>{
//     obj.key1="welcome_1";
//     obj.key2="welcome_2";
//     obj.key3="welcome_3";
//     obj.key4="welcome_4";
//     return obj
// }
// console.log(dat())
//////lock object//
// let obj={
//     "key1":"Hello_1",
//     "key2":"Hello_2",
//     "key3":"Hello_3",
//     "key4":"Hello_4"
// };
//red object
//add object
// const data=()=>{

//     Object.freeze(obj)
//     obj.key5="hiii"
//     return obj

// }
// console.log(data())
// //update object
// const updt=()=>{
//     obj.key1="Byyyy..."
//     return obj
// }
// console.log(updt())
// //delete object
// const dete=()=>{
//     obj.key1="Hello_1"
//     return obj
// }
// console.log(dete())
///////////////
//seal()===add and update  allow
// let obj={
//     "key1":"Hello_1",
//     "key2":"Hello_2",
//     "key3":"Hello_3",
//     "key4":"Hello_4"
// };
// Object.seal(obj)
// console.log(obj)
// ///add
// const ad=()=>{
//     obj.key3="Neee"
//     return obj
// }
// console.log(ad())
// ///upadte
// const upd=()=>{
//     obj.key1="YESSS"
//     return obj
// }
// console.log(upd())
// //delete 
// const det=()=>{
//     delete obj.key1
//     return obj
// }
// console.log(det())
////////////////////
// let obj={
//     "key1":"Hello_1",
//     "key2":"Hello_2",
//     "key3":"Hello_3",
//     "key4":"Hello_4"
// };
// const added=()=>{
//     Object.defineProperty(obj,"key5",{value:"Hello_5"});
//     Object.defineProperty(obj,"key6",{value:"hello_6",writable:false})
    
//     return obj
// }
// console.log(added())
////