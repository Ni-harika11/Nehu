//Account acreationa data save into API
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/user`;
const Adduser=async()=>{
    const from=document.forms['addUserForm']
    const newUser={
      name:from.name.value.trim(),
      email:from.email.value.trim(),
      password:from.password.value.trim(),
      confirompass:from.confirompasssword.value
    };
    try{
      const response=await fetch(`${API_URL_USER}`,
        {
          method:"POST",
          headers:
          { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
        }
       
      );
      alert("Account created succesfully!");
      window.location="../public/index.html";
    }catch(err){
      alert(err.message)
    }
  }
  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    registerUser();
  });
  