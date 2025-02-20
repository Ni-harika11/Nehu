let URL="https://jsonplaceholder.typicode.com/users";
fetch(URL)

.then(function(){
    console.log("getting data...")
});
fetch(URL).catch(function(){
    console.log("Getting Error...");
});
const table=document.querySelector("#table table-striped table-hover");
fetch(URL)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    let fetdata=data;
    fetdata.map(function(table){

    });
})
// const apiurl="https://jsonplaceholder.typicode.com/users";
// let getData=async()=>{
//     console.log("Getting data.....");
//     let fetdata=await fetch(URL)
//     let data=fetdata.json();
//     console.log(data)
    
// }
// getData()
// var table=document.querySelector("#table table-striped table-hover")
// function createTable(data){
//     data.forEach(element => {
//         var id=table.insertRow(0);
//         var name=row.insertCell(1);
//         var email=row.insertCell(2);
//         var address=row.insertCell(3);
//         var phone=row.insertCell(4);
//         var company=row.insertCell(5);
//         table.appendChild(id)
//         table.appendChild(name)
//         table.appendChild(email)
//         table.appendChild(address)
//         table.append(phone)
//         table.appendChild(company)
//     });
// }
// createTable()