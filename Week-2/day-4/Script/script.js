// let URL="https://api.api-ninjas.com/v1/interestrate?country=United Kingdom";
let URL="https://jsonplaceholder.typicode.com/todos?/limit=3"
const factdata=document.getElementById("para");
const btn=document.querySelector("#btn");
/////or asyn way
const getFacts=async()=>{
    console.log("getting data....");
    let fetchdat=await fetch(URL);
    console.log(fetchdat)
    let data=await fetchdat.json()
    console.log(data)
    /////////////
    // fetch(URL).then(Response=>Response.json())
    // .then(json=>console.log(json))
    ////////////////
    // let response=await fetch(URL);
    // console.log(response);//json format
    // let data=await response.json();
    // console.log(data)
    // factdata.innerText=data[0].text;
}
// btn .addEventListener("click",getFacts)
getFacts()
//////promsie way
// function getFacts() { 
//     fetch(URL).then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         fetchPara.innerText=data[2].text;
//     });
// }
// btn .addEventListener("click",getFacts)


// let URL="https://jsonplaceholder.typicode.com/todos/5"
// let btn=document.getElementById("para");
// let but=document.querySelector("#btn")
// const getAllData=async()=>{
//     console.log("getting data")
//     let fetdata=await fetch(URL)
//     console.log(fetdata)
//     let data=await fetdata.json()
//     console.log(data)
//     fetdata.innerTest=data[0].text;
// }
// but.addEventListener("click",getAllData)


// let URL="https://api.thecatapi.com/v1/images/0XYvRd7oD";
// let URL="https://jsonplaceholder.typicode.com/todos/1"
// const FetchData=document.getElementById("para");
// const btn=document.querySelector("#btn");
// const getFetchData=async()=>{
//     console.log("getting data");
//     let response=await fetch(URL);
//     console.log(response)
//     let data=await response.json();
//     console.log(data)
//     FetchData.innerText=data[0].text;
// }
// btn.addEventListener("click",getFetchData);

