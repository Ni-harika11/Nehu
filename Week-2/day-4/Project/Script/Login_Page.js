
/////Loginpage///////
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/user`;

document.getElementById('loginFormElement').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form from refreshing
  
    let Userename = document.getElementById("login-username");
    let UserPassword = document.getElementById("login-password");
  
    const name = Userename.value.trim();
    const password = UserPassword.value.trim();
  
    if (!name || !password) {
      alert("Please fill in both fields");
      return;
    }
  
    // Call the API to authenticate user
    try {
      const response = await fetch(`${API_URL_USER}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });
  
      if (!response.ok) {
        throw new Error("Invalid name or password.");
      }
  
      const user = await response.json(); // Example response: { role: "Admin", username: "John" }
      handleUserRole(user); // Redirect based on role
    } catch (err) {
      console.error("Login failed:", err.message);
      alert("Login failed. Please try again.");
    }
  });
  
  function handleUserRole(user) {
    if (user.role === "Admin") {
      window.location.href = "admin_dashboard.html";
    } else if (user.role === "Customer") {
      window.location.href = "customer_dashboard.html";
      localStorage.setItem("username", user.username); // Save username for welcome message
    } else {
      alert("Unknown role.");
    }
  }
  
  
  //API request POST
  async function loginUser(email, password) {
    try {
      const response = await fetch(`${API_URL_USER}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      window.location.href="../public/"
    } catch (err) {
      console.log(err);
    }
  }
   
  /////////////////
  