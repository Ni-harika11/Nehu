// const API_URL= `http://localhost:3000`;
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
    const newUser:Users={
        fname:fname,
        lname:lname,
        email:email,
        address:address,
        role:role,
        phone:phone,
        company:company
    };
    try{
        const response=await fetch(API_URL_USER,{
            method:"POST",
            headers:{ "Content-Type": "application/json" },
            body:JSON.stringify(newUser)
        });
        await renderData();
    }catch(err){
        console.log(err)
    }
}

////Delete user by ID
async function DeleteData(id:number) {
    if(
        confirm("Are you sure you want to delete this user? This action cannot be undone."
        )
    ){
        try{
            const response=await fetch(`${API_URL_USER}/${id}`,{
                method:"DELETE",
            });
            if(!response.ok) throw new Error("Failed to delete user");
            await renderData();//Refershe table
            alert("user deleted successfully.")
            console.log(`user with ID ${id} deleted.`)
        }catch(err){
            alert("failed to delete user. please try again.")
        }
    }
    
}

///Attach event listesenrs for dlelete table
const deleteButtons = document.querySelectorAll<HTMLElement>(".delete-btn");
deleteButtons.forEach((button) => {
  button.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement ;
    if (target) {
      const userId = Number(target.getAttribute("data-id"));
      DeleteData(userId);
    }
  });
});

//Initial rendering of user data
renderData();

//Adduser()
//collect user data from form fileds
type UsrCity={
    city:string;
    website:string;
    name:string;
}
type UserData={
    UsrCity?:string
    city?:string;
    website?:string;
    name?:string;
    fname:string;
    lname:string;
    email:string;
    address:string;
    role:string;
    phone:number;
    company:string;


}
function getUserData() {
    return {
        fname: (document.getElementById("fname") as HTMLInputElement).value.trim(),
        lname: (document.getElementById("lname") as HTMLInputElement).value.trim(),
        email: (document.getElementById("email") as HTMLInputElement).value.trim(),
        address: {
            city: (document.getElementById("address") as HTMLInputElement).value.trim()
        },
        role: (document.getElementById("role") as HTMLInputElement).value.trim(),
        phone: Number((document.getElementById("phone") as HTMLInputElement).value.trim()), // ADDED THIS
        company: {
            website: (document.getElementById("website") as HTMLInputElement).value.trim(),
            name: (document.getElementById("company") as HTMLInputElement).value.trim(),
        }
    };
}




//send POST request to add user
async function addUser(userData:string) {
    const response=await fetch(API_URL_USER,{
        method:"POST",
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify(userData),
    });

    
}

function closeModal():void{
    (document.getElementById("employeeForm")as HTMLFormElement).reset(),
    (document.getElementById("addEmployeeModal")as HTMLInputElement).classList.remove("show"),
    (document.getElementById(".modal-backdrop")as HTMLFormElement).remove();
}

///////
async function handleFormSubmit(event:Event) {
    event.preventDefault();
    try{
        const newUsersData=getUserData();
        await addUser(JSON.stringify(newUsersData));
        closeModal();
        await renderData();
        console.log("user added succefully")
    }catch(err){
        console.log("error detecting user:",err);
    }
}

///
const employeeForm=document.getElementById("employeeForm")as HTMLInputElement;
employeeForm.addEventListener("submit",handleFormSubmit);

//Edit
//get all the iputs  from Form:


//Send POST request to add uer
 

////////When click edit it will  automatically fill the edit options all
type dat={
    fname:string;
    lname:string;
    email:string;
    address:string;
    city:string;
    role:string;
    phone:number;
    company:{
        website:string;
        name:string;
    };
} 
function fillEditForm(user:dat){
    (document.getElementById("fname")as HTMLInputElement).value=user.fname;
    (document.getElementById("lname")as HTMLInputElement).value=user.lname;
    (document.getElementById("email")as HTMLInputElement).value=user.email;
    (document.getElementById("address")as HTMLInputElement).value=user.address;
    (document.getElementById("role")as HTMLInputElement).value=user.role;
    (document.getElementById("phone")as HTMLInputElement).value=user.phone.toString();
    (document.getElementById("website")as HTMLInputElement).value=user.company.website;
    (document.getElementById("company")as HTMLInputElement).value=user.company.name;
}

// sned the UserId n backend
async function  updateUser(userId:number,updatedData:UserData) {
    const response=await fetch(`${API_URL_USER}/${userId}`,{
        method:"PUT",
        headers:{ "Content-Type": "application/json" },
        body:JSON.stringify(updatedData)
    });
    if(!response.ok){
        const error=await response.json();
        console.log(error.meassage)
    }

}
//////affter the sucessfully editied --remove from backend
function closeEditModal(){
    (document.getElementById("editUserForm")as HTMLFormElement).reset(),
    (document.getElementById("editUsersModal")as HTMLFormElement).classList.remove("show"),
    document.body.classList.remove("modal-open")
}


async function handleEditFormSubmit(event: Event, userId: number):Promise<void> {
    event.preventDefault();
    try {
        const Data: UserData = getUserData();
        await updateUser(userId, Data);
        closeEditModal();
        await renderData();
        console.log("Updated successfully");
    } catch (err) {
        console.error("Error updating user:", err);
    }
}
 



//// Attach event listener to form for edit (dynamic)
function attachEditFormListener(userId:number) {
    const form=document.getElementById("editUsersModal") as HTMLElement;
    form.onsubmit=(event)=>handleEditFormSubmit(event,userId)
}

/////// When user clicks "Edit" button
function editUser(userId:number){
    fetch(`${API_URL_USER}/${userId}`)
    .then((response)=>response.json())
    .then((user:dat)=>{
        fillEditForm(user);
        attachEditFormListener(userId);
    //show the modal after filling the from
    (document.getElementById("editUsersModal")as HTMLFormElement).classList.add("show"),
    document.body.classList.add("modal-open")

    })
    .catch((err)=>{
        console.log(err)
    })
}