// // let api_url="https://jsonplaceholder.typicode.com/users";
// let initilize=(user,getElementByEmail,getelId)=>{
//     console.log(user,getElementByEmail(),getelId())

// };
// let getElementByEmail=()=>{
//     return "hell"
// }
// let getelId=()=>{
//     return "hee"
// }
// initilize("ehh",getElementByEmail,getelId)
// /////
// let arr=[];
// for(let i=0;i<5;i++){
//     arr.push(()=>{})
// }
// ////////////length
// // let arry=[10,20,30,40]
// // console.log(arry.length)
// /////push()//add value last
// ///pop()//delet end value
// ///unshift()//add first value
// ///shift()//remove first value
// //delete
// // delete arry[0];
// let val=[10,20,30,40]
// console.log(val)

// console.log(delete val[2])
// /////concate()
// let arry=[10,20,30,40]
// let ay=[...arry]
// /////////////
// let values=[11,22,33,44,55,66,77]

// // console.log(values.splice(index,elements))
// values.splice(2,3)
// arr.splice()
// ///////
// let ar1=[0,1,2,3,4,5,6,7,8,9]
// ar1.splice(0,1);
// console.log()
// //////map()
// // used to manupulate each elemnts
// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//         return element * 100;
//     }))

// console.log(
//     [11,22,33,44].map((element)=>{
//         return [[10,22,33,44]%2===0];
//     })
// )
// console.log(
//     [1,2,3,4,5,6].map((element,index)=>{
//         return [element,index]
//     })
// )

// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//         return {index:element}
//     })
// )
// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//         return {[index]:element}
//     })
// )
// function obj(element,index) {
//     [1,2,3,4,5],map((element,index)=>{
//         return {[element]:index}
//     })
// }
// ////filter
// function flt(element,index) {
//     [1,2,3,4].filter((element,index)=>{
//         return element >=3;
//     }).map((element,index)=>{
//         return element * 100;
//     })
//   }
// // console.log(flt())
// function deatil(element,index){
//     let data=[
        // {'e_id':111,"e_name":"e_one","e_sal":10000},
        // {"e_id":222,"e_name":"e_two","e_sal":30000},
        // {'e_id':333,"e_name":"e_three","e_sal":50000},
        // {"e_id":444,"e_name":"e_four","e_sal":30000},
        // {'e_id':555,"e_name":"e_five","e_sal":80000},
        // {"e_id":666,"e_name":"e_six","e_sal":20000},
        // {'e_id':777,"e_name":"e_seven","e_sal":90000},
        // {"e_id":888,"e_name":"e_eight","e_sal":60000},

//     ].filter((element,index)=>{
//         return element.e_sal>=30000;
//         console.log(element)
//     })
// }
// deatil();
///
// const arfil=()=>{
//     let val=[1,2,4,5]
//     val.fill("90")
//     return val
// }
// console.log(arfil())
// //////////
// const arrfil=()=>new Array(5).fill("0")
// console.log(arrfil())
// ///////////3 fill wiith string
// const Aray=()=>{
//     let vl=[1,2,3,4,5,6,7,8,9,10]
//     vl.fill("99",3,7)
//     return vl
// }
// console.log(Aray())
// ////////////
// const emptYArry=()=>new Array(4).fill(null)
// console.log(emptYArry())
// ////////////////
// const PrinHell=()=>new Array(4).fill("Hello")
// console.log(PrinHell())
// //////////////////
// ////pop()////
// const poFunc=()=>{
//     let val=[10,20,30,40,50]
//     val.pop()
//     return val
    
// }
// console.log(poFunc())
// ////
// const twPop=()=>{
//     let ary=["apple", "banana", "cherry", "date", "fig"]
//     ary.pop()
//     ary.pop()
//     return ary
// }
// console.log(twPop())
// //////
// function prfu(){
//     let nval=[1,2,3,4,5]
//     nval.pop()
//     return nval
// }
// console.log(prfu())
// //////
// let vale=[1,2,3,4,5]
// while(vale.length > 0){
//     vale.pop()
//     console.log(vale)
// }

// ///////////
// const refunc=()=>{
//     let Rbval=["A","B","C","D"]
//     Rbval.pop()
//     return Rbval
// }
// console.log(refunc())
// /////////push////
// function puAd(){
//     let adval=["red", "blue", "green"]
//     adval.push("yellow")
//     return adval
// }
// console.log(puAd())
// //////
// const MulVal=()=>{
//     let v=[1,2,3]
//     v.push(4,5,6)
//     return v

// }
// console.log(MulVal())
// ///////////
// function ArgVal(vl){
//     let val=["apple","banana"]
//     val.push(vl)
//     return val
// }
// console.log(ArgVal("cherry"))
// ////////
// const Empty=()=>{
//     let Earray=[]
//     for(let i=0;i<=5;i++){
//         Earray.push(i);
//         return Earray;
//     }
// }
// console.log(Empty());
// //////////////
// const ShiFunct=()=>{
//     let val=["red","blue","green"]
//     val.shift()
//     return val
// }
// console.log(ShiFunct())
// /////////
// const twoFun=()=>{
//     let nums=[1,2,3,4,6]
//     nums.shift()
//     nums.shift()
//     return nums
// }
// console.log(twoFun())
// //////
// const ShArg=(empt)=>{
//     // let empt=[1,2,3,4];
//     empt.shift()
//     return empt
// }
// console.log(ShArg(["apple", "banana", "cherry"]))
// //////// Aem=[]
// const emptAry=()=>{
//     let empty=[]
//     empty.shift()
//     return empty
// }
// console.log(emptAry())
// ///////////// 
// function UnsArry() {
//     let colores=['red','blue','green']
//     colores.unshift("yellow")
//     return colores
// }
// console.log(UnsArry())
// ////////////
// const Threary=()=>{
//     let num=[40,50,60];
//     num.unshift(10,20,30)
//     return num
// }
// console.log(Threary())
// ///////
// const EmpArrya=(val,va)=>{
//     val.unshift(va)
//     return val
// }
// console.log(EmpArrya(['apple','cherry'],'orange'))
// /////
// const Em=(vl)=>{
//     let empt=[]
//     empt.unshift(vl)
//     return empt
// }
// console.log(Em("first"))
// //////////////concat()
// const Cont=()=>{
//     let c1=['red','blue']
//     let c2=['green','yellow']
   
//     return  c1.concat(c2)
// }
// console.log(    Cont())
// /////
// const Morcon=()=>{
//     return [1,2].concat([3,4],[5,6])
    
// }
// console.log(Morcon())
// ///////
// const EmptArrya=()=>{
//     let empty=[]
   
//     return  empty.concat(['apple','banana'])
// }
// console.log(EmptArrya())
// ////////
// const StrCon=()=>{
//     let ar=['hello','world']
   
//     return  ar.concat("!")
// }
// console.log(StrCon())
// /////slice()
// const SlicP=()=>{
//     let spl=['red','blue','green','yellow','purple']
    
//     return spl.slice(0,3)
// }
// console.log(SlicP())
// /////////
// const NegSlice=()=>{
//     let nums=[10,20,30,40,50]
//     return nums.slice(3,5)

// }
// console.log(NegSlice())
// ///////
// const MidSlice=()=>{
//     let fruits=['apple','banana','cherry','date','fig']
//     return fruits.slice(1,3)
// }
// console.log(MidSlice())
// ////////
// const EmptySlice=()=>{
//     let arry=[]
//     return arry.slice()
// }
// console.log(EmptySlice())
// //////
// const removeSecond = () => {
// //     let colors = ['red', 'blue', 'green', 'yellow'];
// //      return colors .splice(1,2)
// // }     
// // console.log(removeSecond());
// ////reduce()
// console.log(
//     [1,2,3,4,5,6,7,8,9,0].reduce((first,second)=>{
//         return first+second;
//     }))
// let valu= [1,2,3,4,5,6,7,8,9,0].reduce((first,second)=>{
//     return first+second;
// })
// console.log(valu)
// //////
// const LogValue= [1,2,3,4,5,6,7,8,9,0].reduce((first,second)=>{
//     return first+second;
// })
// console.log(LogValue)
// ///
// function RedU() {
//     return [1,2,3,4,5,6,7,8,9,0].reduce((first,second)=>{
//         return first+second;
//     });
// }
// console.log(RedU())
// //////
// const mP=()=>{
//     return [1,2,3,4].map((Element,index)=>{
//         return Element *100;
//     }).filter((Element,index)=>{
//         return Element >=200;
//     }).reduce((Element,index)=>{
//         return Element+index;
//     })
// }
// console.log(mP())
// ///////////reduceRight()
// const Cont=()=>{
//     return ["javaScrpipt","to","welcome"].reduceRight((first,second)=>{
//         return first+second;
//     });
// }
// console.log(Cont())
/////
// let arr1=[10,20,30,40,50,60,70,80,90]
// console.log(arr1.slice(1,3))
// console.log(arr1.slice(1,4))
// console.log(arr1.slice(2,9))
// console.log(arr1.slice(-5,-4));
// console.log(arr1.slice(-9,-1));
///////
// const vale=()=>{
//     return [[1],[2],[3]].flat(1)
// }
// console.log(vale())
// /////
// const neflat=()=>{
//     return [[[[[[[[2]]]]]]],[[[[[[[[3]]]]]]]],[[[[[[[[7]]]]]]]]].flat(Infinity)
// }
// console.log(neflat())
/////
// const neValu=()=>{
//     let arr1=[1,2,3]
//     let arr2=['one','two','three']
//     return arr1.map((Element,indexe)=>{
//         return [Element,arr2[indexe]]
//     })
// }
// console.log(JSON.stringify(neValu()))
//////
// const Fltamap=()=>{
//     let arr1=[1,2,3]
//     let arr2=['one','two','three']
//     return arr1.flatMap((Element,indexe)=>{
//         return [Element,arr2[indexe]]
//     })
// }
// console.log(Fltamap())
/////////findIndex()
const Inval=()=>{
    return [1,2,3,46].findIndex((Element,indexe)=>{
        return Element==3;
    })
}
console.log(JSON.stringify(Inval()))
////////
const Arydel=()=>{
    let arr1=[1,20,305,60,60,40]
    return arr1.splice(2,1)
}
console.log(JSON.stringify(Arydel()))
////////
const emapy=()=>{
    let data=[
        {'e_id':111,"e_name":"e_one","e_sal":10000},
        {"e_id":222,"e_name":"e_two","e_sal":30000},
        {'e_id':333,"e_name":"e_three","e_sal":50000},
        {"e_id":444,"e_name":"e_four","e_sal":30000},
        {'e_id':555,"e_name":"e_five","e_sal":80000},
        {"e_id":666,"e_name":"e_six","e_sal":20000},
        {'e_id':777,"e_name":"e_seven","e_sal":90000},
        {"e_id":888,"e_name":"e_eight","e_sal":60000},
    ]
    return data.splice(data.findIndex((Element,indexe)=>{
        return Element.e_id==50000;
    }),1)
}
console.log(JSON.stringify(emapy()))
///////some()//at least get true/otherwise get false
///if one conditions satified then true
const somedta=()=>{
    return [1,2,3,4,5].some((Element,indexe)=>{
        return Element<=1;
    })
}
console.log(somedta())
////////
const deta=()=>{
    return [1,2,3,5].some((Element,indexe)=>{
        return Element>=3
    })
}
console.log(deta())
/////
const evrt=()=>{
    return [22,4,6,6].every((Element,indexe)=>{
        return Element<=50
    })
}
console.log(evrt())
/////find()
const fiddata=()=>{
    return [1,2,3,5].find((Element,indexe)=>{
        return Element ==5
    })
}
console.log(fiddata())
////indexOf()
const data=()=>{
    let arr1=[2,3,5,7,9,5,4,7,90,2]
    return arr1.forEach((Element,indexe)=>{
        return arr1.indexOf(Element,indexe)
    })
}
console.log(data())
/////////
const elt=()=>{
    let arr=[7,8,3,3]
    return arr.forEach((Element,index)=>{
        console.log 
    })
}