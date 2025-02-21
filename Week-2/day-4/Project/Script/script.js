// let fatechData=fetch("https://jsonplaceholder.typicode.com/users/1")
let fetechData=fetch("http://localhost:3000/user/1")
fatechData.then(response => response.json())
    .then(data => {
        let rows = ''; // Declare `rows`/ before using it

        data.forEach(user => {
            rows += `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.address.street +" ", user.address.city}</td>
                        <td>${user.phone}</td>
                        <td>${user.website}</td>
                       <td>${user.company.name}</td>
                        <td>			
                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
 						<a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
 						</td>
                    </tr>`;  
                
                
});

// Ensure the table body exists before updating
let tableBody = document.querySelector("tbody");
if (tableBody) {
            tableBody.innerHTML = rows;
} else {
            console.error("Table body not found!");
        }
 })
.catch(error => console.error("Error fetching data:", error));//any errors that occur while fetching data from the API
 
// //valid phone nnumber
// /////Error messege
    // let Numbers=document.getElementById("Number");
    // function valid(Number){
    //     const pattern=/^+[91]?[6789]\d{10}$/;
    //     console.log(pattern)
    //     return pattern.test(Numbers);
    // }
    // pattern.forEach(num=>{
    //     console.log(`${num}`);
    // });