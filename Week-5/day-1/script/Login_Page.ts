const API_URL="http://localhost:3000";
const API_URL_USER=`${API_URL}/users`;
document.addEventListener("DOMContentLoaded",function(){
    const Login_Form=document.getElementById("loginFormElement") as HTMLFormElement;
    let UserEmail=document.getElementById("loginFormElement") as HTMLInputElement ;
    let UserPassword=document.getElementById("login-password") as HTMLInputElement;

    Login_Form.addEventListener('submit',async function (e:SubmitEvent)   {
        e.preventDefault()
        if(UserEmail.value.trim()==="" || UserEmail.value.trim()===""){
            alert("please fill in both fields");
            return ;
        }
        //Email validations
        const emailPatr=/^[a-zA-A0-9][._%+-]*@[a-zA-Z]+\.(com)$/;
        if(!emailPatr.test(UserEmail.value.trim())){
            alert("please enetr a valid email (e.g., example@domain.com)")
            return ;
        }
        //fetch user data
        await FetchDataFrom({email:UserEmail.value.trim(),
             password:UserPassword.value.trim()}); 
    })

});

type User={
    user:string;
    role:string;
    username:string;
}
function handleUserRole(user:User){
    if(user.role==="Admin" || user.role==="Super Admin"){
        window.location.href=""///Add path here
    }else if(user.role==="Customer"){
        window.location.href="/"//add path here
        localStorage.setItem("username",user.username)// Store username in local storage
    }
}

////Fetch user data from API and Check password
type datas={
    email:string;
    password:string;
}
async function FetchDataFrom(val:datas) {
    try{
        const {email,password}=val;
        const response=await fetch(`${API_URL_USER}?email=${email}&password=${password}`);
        const data=await response.json();
        if(data.length===0){
            alert("User not found");
            return ;
        }
        const user=data[0]
        if(user.password!=password){
            alert("incorect password")
            return;
        }
        //show success alter and handle redirections
        alert("login successful")
        handleUserRole(user)
    }catch(error){
        console.log(error)
    }
}

////////modal data
//store the data 
const employeeForm=document.getElementById("employeeForm") as HTMLFormElement;
employeeForm.addEventListener('submit',function(e:SubmitEvent){
    e.preventDefault();
    handleFormSubmission();
});

///collect from data
type AllData={
    fname:string;
    lname:string;
    email:string;
    address:string;
    password:string;
    role:string;
    phone:string;
    website:string;
    company:string;

}
function getFormData():AllData{
    
        // const {fname,lname,email,address,password,role,phone,website,company}=va
        return {
            fname:(document.getElementById('fname') as HTMLInputElement).value.trim(),
            lname:(document.getElementById('lname')as HTMLInputElement).value.trim(),
            email:(document.getElementById('email')as HTMLInputElement).value.trim(),
            address:(document.getElementById('address')as HTMLInputElement).value.trim(),
            password:(document.getElementById('password') as HTMLInputElement).value.trim(),
            role:(document.getElementById('role')as HTMLInputElement).value,
            phone:(document.getElementById('phone')as HTMLInputElement).value.trim(),
            website:(document.getElementById('website')as HTMLInputElement).value.trim(),
            company:( document.getElementById('company')as HTMLInputElement).value.trim()
        };

}

///Validate the from data
function ValidateFormData(data:AllData):boolean{
    let isValid=true;
    if(data.fname==""){
        const firstError=document.getElementById("firstError")
        if(firstError) firstError.textContent="First name are required";
        isValid=false;
    }
    if(data.lname==""){
        const lastError=document.getElementById("lastError")
        if(lastError)lastError.textContent="last nae is required";
        isValid=false;
    }
    const phonePattern=/^[6-9]\d{10}$/;
    if(!phonePattern.test(data.phone.trim())){
        const phoneError=document.getElementById("phoneError")
        if(phoneError)phoneError.textContent="Invalid Phone number";
        isValid=false;
    }
    if(data.password.trim()==""){
        const passwordError=document.getElementById("passwordError")
        if(passwordError)passwordError.textContent="Password must be required"
        isValid=false
    }
    return isValid;
}
///post data to JSON Server
async function addUser(data:AllData) {
    try{
        const response=await fetch(API_URL_USER,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        });
        if(!response.ok){
            alert("failed to add user")
        }
        alert("user added successfully")
        employeeForm.reset();//clear the form
        (document.getElementById('addEmployeeModal') as HTMLElement).style.display = 'none';
  
    }catch(err){
        console.log(err)
        alert("something went wrong . please try again.")
    }
}


///Handle form submission

function handleFormSubmission(){
    const formData:AllData=getFormData();

    //clear privieous error message
    clearErrors();;

    if(ValidateFormData(formData)){
        addUser(formData)
    }
}


//clear error meassage
type Errors={
    errorId:number;
    id:number;
}
function clearErrors() {
    const errorIds = ['firstError', 'lastError', 'emailError', 'phoneError', 'passwordError'];
    errorIds.forEach((id) => {
        (document.getElementById(id) as HTMLElement).textContent = "";
    });
}
