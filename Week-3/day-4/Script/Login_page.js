
/////Loginpage///////
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/user`;

const Login_From=document.getElementById('loginFormElement')
Login_From.addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form from refreshing
  
    let Userename = document.getElementById("login-username");
    let UserPassword = document.getElementById("login-password");
  
    const name = Userename.value.trim();
    const password = UserPassword.value.trim();
  
    if (name=="" || password=="") {
      alert("Please fill in both fields");
      return;
    }else if(!name==/^[A-Za-z]?/){
      alert("Nmae must be Charters")
      return false;
    }

    try{
      ///Featch alll user from the API
      const response=await fetch(`${API_URL_USER}`);
      if(!response.ok){
        throw new Error("Failed to fetch users")
      }

      const users=await response.json();

      //Find user with mathcing usernamea and password
      const user = users.find(user => user.name === name && user.password === password);
      if(user ){
        handleUserRole(user);
      }else{
        alert("Invalid username or password");
      }
      
    }catch (err) {
      console.error("Login failed:", err.message);
    }
  });
// Handle user role redirection
function handleUserRole(user) {
  if (user.role === "Admin" || user.role=="Super Admin") {
    window.location.href = "../../day-4/Project/public/index.html";
  } else if (user.role === "Customer") {
    window.location.href = "customer_dashboard.html";
    localStorage.setItem("username", user.username); // Store username in local storage
  }
}
 
 