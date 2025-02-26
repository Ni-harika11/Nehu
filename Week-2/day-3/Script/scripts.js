// a=int("1234567890")
// res=(a(a+1))//2
// print(res)
// // let bts=document.getElementById("btn");
// function  set_background(){
//     var x=Math.floor(Math.random()*256);
//     var y=Math.floor(Math.random()*256);
//     var z=Math.floor(Math.random()*256);
//     var bagcolor="rgb("+x+","+y+","+z+")";
//     document.body.style.backgroundColor=bagcolor;

    // document.body.style.backgroundColor="red";
    // document.body.style.backgroundColor="yellow";
    // let docBody=document.getElementById("body")[0];

// }
// set_background();
//2 questions
//async /await
// function z() {
//     return 1;
//   }
// console.log(z())
// ///with async
// async function z() {
// //     return 1;
    
// // }
// // console.log(z())
// //
// // async function z(){
// //     return new Promise(()=>{

// //     });
// // }
// // console.log(z())
// // ////Resolved State

// // async function z(){
// //     return new Promise((resolve,reject)=>{
// //         resolve(1)
// //     })
// // }
// // console.log(z())
// // //Rejected State
// // async function z(){
// //     return new Promise((resolve,reject)=>{
// //         reject(1)
// //     });
// // }
// // console.log(z())
// /////
// // fetch("https://jsonplaceholder .typicode .com/todos/1")
// // .then(response => response.json())
// // .then(json => console.log(json))
// ////////////////////////////
// // function sum(a,b){
// //     console.log(a+b);
// // }
// // function calculator(a,b,sumCallback){
// //     sumCallback(a,b);
// // }
// // calculator(1,2,sum);
// //or
// // calculator(1,2,(a,b)=>{
// //     console.log(a+b)
// // // });
// // ////////////////
// // const hello=()=>{
// //     console.log("hello")
// // };
// // setTimeout(hello,4000);
// ////////////////////
// ////promis
// // let promise=new Promise((reslove,reject)=>{
// //     console.log("i am a promise");
// //     // reslove(33)
// //     reject("error occured")
// // })
// //////////
// function getData(dataID, getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             console.log("data",dataID);
//             console.log("succ")
//             if (getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }
// //////////////
// ///.then()
// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i m promise");
//         // resolve("succes") //for then()
//         reject("eror")///.cath()
//     });
// };

// let promise=getPromise();
// promise.then(()=>{
//     console.log("promise fulfilled")
// });
// promise.catch(()=>{
//     console.log("rejected")
// });
//////////////////////
// function asynFunC(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data");
//             resolve("success");
//         },4000);
//     })
// }
// console.log("fetching data");
// let p=asynFunC();
// p.then((res)=>{
//     console.log(res)
// });
/////////////////
// function asynFunC1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data");
//             resolve("success");
//         },4000);
//     })
// }

// function asynFunC2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data");
//             resolve("success");
//         },4000);
//     })
// }
////////////////one way
// console.log("fetching data1...");
// let p1=asynFunC1();
// p1.then((res)=>{
//     console.log(res)
// });

// console.log("fetching data2....");
// let p2=asynFunC2();
// p2.then((res)=>{
//     console.log(res)
// });
/////////////other way
// console.log("fetching data");
// let p1=asynFunC1();
// p1.then((res)=>{
//     console.log(res)
//     console.log("fetching data2....");
//     let p2=asynFunC2();
//     p2.then((res)=>{
//        console.log(res)
//     })

// });
///////////other way
// console.log("feteching data1//...");
// asynFunC1().then((res)=>{
//     console.log("fetching data2....");
//     asynFunC2().then((res)=>{});
// });
//////////////////
//promise chain
function getData(dataID){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("data",dataID);
            resolve("sucess")
            
        },5000);
    });
}
// ////one way
let p=getData(1);
p.then((res)=>{
    console.log(res)
});
// /// two way
getData(1).then((res)=>{
    console.log(res)
});
// ///three way
getData(1).then((res)=>{
    console.log(res)
    getData(2).then((res)=>{
        console.log(res)
    });
}); 
// ////four way
getData(1).then((res)=>{
    return getData(2)
})
.then((res)=>{
    console.log(res)
});
// ////////
// ////async//////
// function api() {
//     return new Promise((resolve,reject)=>{
//         console.log('wather api');
//         setTimeout(()=>{
//             console.log("wearger data");
//             resolve(200);
//         },2000);
        
//     });
// };

// // async function getWeatherData() {
// //     await api();
    
// // }

// // function getWeatherData(dataID){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//             resolve("success")
//         },2000);
//     }); 
// }
///////////
function getData(dataID){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            console.log("data",dataID);
            resolve("sucess")
            
        },5000);
    });
}
// async function getAllData() {
//     await getData(1);
//     await getData(2)
//     await getData(3)
    
// }
//IIFE:////// 
// (async function (){
//         console.log("data1");
//         await getData(1);
//         console.log("data2,");
//         await getData(2);
//     }
// ){};