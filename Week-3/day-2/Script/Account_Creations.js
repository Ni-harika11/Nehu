//Account acreationa data save into API
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/user`;

// Declare variables globally
let names, Emails, Passwords, Conf_Password, From_Page;

// Initialize form elements
function initializeForm() {
  names = document.getElementById("register-username");
  Emails = document.getElementById("register-email");
  Passwords = document.getElementById("register-password");
  Conf_Password = document.getElementById("confirom-password");
  From_Page = document.getElementById("registerFormElement");
}


// Form validation function
function validateForm() {
  const EmailsPattern=/^[A-Za-z0-9._+-]+@[a-zA-z0-9.-]+\.[a-zA-Z]{2,}$/
  if (
    names.value == "" ||
    Emails.value == "" ||
    Passwords.value == "" ||
    Conf_Password.value == ""
  ) {
    alert("All fields are mandatory");
    return false;
  } else if (names.value.length < 3 || names.value.length > 30) {
    alert("Name should be between 3 and 30 characters");
    return false;
  } else if (Passwords.value !== Conf_Password.value) {
    alert("Passwords do not match");
    return false;
  }else if(!EmailsPattern.test(Emails.value)){
    alert("Plaese neter a valid Email address")
  }
  return true; // Form is valid
}

// Save data to local storage
function saveToLocalStorage(userData) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Account created successfully! Data saved to local storage.");
}




// Submit event listener
document.addEventListener("DOMContentLoaded", () => {
  initializeForm();

  From_Page.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    // Stop if form is invalid

    const NewUserData = {
      names: names.value.trim(),
      Emails: Emails.value.trim(),
      Passwords: Passwords.value.trim(),
      Conf_Password: Conf_Password.value.trim(),
    };
   
    try {
      const response = await fetch(`${API_URL_USER}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(NewUserData),
      });

      
      if (!response.ok) {
        throw new Error("Failed to create account");
      }

      saveToLocalStorage(NewUserData)

      alert("Account created successfully!");
      console.log("User data saved:", await response.json());
     

      //reload page after submit
      setTimeout(()=>{
        window.location.reload()
      },200);
    } catch (err) {
      console.error("Error:", err.message);
    }
    
  });
});
