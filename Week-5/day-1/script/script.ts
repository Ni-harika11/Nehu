// const API_URL= "http://localhost:3000";
// const API_URL_USER=`${API_URL}/users`;
const tableBody=document.querySelector("#user-table tbody")as HTMLTableElement;

//Fetch data from API
async function getData() {
    try{
        const response=await fetch(API_URL_USER)
        return await response.json();
    }catch(err){
        console.log("Error Fetching data:",err)
    }
    
}

///Render users in the table
async function  renderData() {
    const userData=await getData();
    tableBody.innerHTML="";

    if (!userData.length){
        tableBody.innerHTML="<tr><td colspan='9'>No users found.</td></tr>";
        return ;
    }
    type Company={
        name:string;
        website:string;
    }

    type Address={
        city:string
    }
    
    type details={
        company?:Company;
        address?:Address;
        companyName:string;
        companyWebsite:string;
        city:string;
        id:number;
        fname:string;
        lname:string;
        email:string;
        role:string;
        phone:number;
        website:string;
    }
   


    userData.forEach((user:details)=>{

      const companyName=user.company?.name;
      const companyWebsite=user.company?.website;
      const city=user.address?.city;
      const row=document.createElement("tr")as HTMLTableRowElement;
      row.innerHTML=`
      <td>${user.id}</td>
      <td>${user.fname}</td>
      <td>${user.lname}</td>
      <td>${user.email}</td>
      <td>${city}</td>
      <td>${user.role}</td>
      <td>${user.phone}</td>
      <td><a href="${companyWebsite}" target="_blank>${companyWebsite}</a></td>
      <td>${companyName}</td>
      <td>
        <button class="edit-btn" onclick="editUser(${user.id})">✏️</button>
        <button class="delete-btn" data-id="${user.id}">❌</button>
      </td>`;
      tableBody.appendChild(row)

    })
    // attachDeleteListeners(); // Reattach listeners after rendering

}

//Add new User
async function  AddUser() {
    const fname=(document.getElementById("fname")as HTMLInputElement).value.trim();
    const lname=(document.getElementById("lname")as HTMLInputElement).value.trim();
    const email=(document.getElementById("email")as HTMLInputElement).value.trim();
    const address=(document.getElementById("address")as HTMLInputElement).value.trim();
    const role=(document.getElementById("role")as HTMLInputElement).value.trim();
    const phone=(document.getElementById("website")as HTMLInputElement).value.trim();
    const website=(document.getElementById("website")as HTMLInputElement).value.trim();
    const company=(document.getElementById("company")as HTMLInputElement).value.trim();

    type Users={
        fname:string;
        lname:string;
        email:string;
        address:string;
        role:string;
        phone:string;
        company:string;
    }
    // const newUser:Users={
    //     fname:{'fname':fname},
    //     lname:{'lname':lname},
    //     email:{'email':email},
    //     address:{'city':address},
    //     role:{'role':role},
    //     phone:{'phone':phone},
    //     company:{"company":company}
    // };

    
}




