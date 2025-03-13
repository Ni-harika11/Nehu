//form validations login and sigup pages or tabes
// TypeScript Signup Form
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/user`;
const loginTab = document.getElementById('loginTab') as HTMLButtonElement;
const signupTab = document.getElementById('signupTab') as HTMLButtonElement;
const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const signupForm = document.getElementById('signupForm') as HTMLFormElement;
// // ///Tab 
loginTab.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginTab.classList.add('border-blue-600');
    signupTab.classList.remove('border-blue-600');
});
//Tab
signupTab.addEventListener('click', () => {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signupTab.classList.add('border-blue-600');
    loginTab.classList.remove('border-blue-600');
});
// // Email validation on form login page
const form = document.getElementById('loginForm') as HTMLFormElement;
const email = document.getElementById('login-email') as HTMLInputElement;
const password = document.getElementById('login-password') as HTMLInputElement;
const confirmPassword = document.getElementById('confirm-password') as HTMLInputElement;
const button = document.getElementById('button') as HTMLButtonElement;
const emailError = document.getElementById('emailError') as HTMLSpanElement;
const passwordError = document.getElementById('passwordError') as HTMLSpanElement;
const confirmPasswordError = document.getElementById('confirmpasswordError') as HTMLSpanElement;

// // Disable button by default
button.disabled = true;
button.classList.add('bg-gray-400', 'hover:bg-gray-400');

// // Email validation regex
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// // Function to validate form
function validateForm(): void {
  let isValid: boolean = true;

//   // Email validation
  if (!emailRegex.test(email.value)) {
    emailError.textContent = 'Invalid email format';
    email.classList.add('border-red-500');
    isValid = false;
  } else {
    emailError.textContent = '';
    email.classList.remove('border-red-500');
  }

//   // Password match validation
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
    confirmPassword.classList.add('border-red-500');
    isValid = false;
  } else {
    confirmPasswordError.textContent = '';
    confirmPassword.classList.remove('border-red-500');
  }

//   // Check if all fields are filled
  if (!email.value || !password.value || !confirmPassword.value) {
    isValid = false;
  }

//   // Enable/disable submit button
  if (isValid) {
    button.disabled = false;
    button.classList.remove('bg-gray-400', 'hover:bg-gray-400');
    button.classList.add('bg-blue-600', 'hover:bg-blue-700');
  } else {
    button.disabled = true;
    button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
    button.classList.add('bg-gray-400', 'hover:bg-gray-400');
  }
}


// // Prevent form submission for now
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  alert('Form submitted successfully!');
  window.location.reload();
});
////Check User is Available or not
async function FetchDataFrom(email: string, password: string) {
  try {
    const response = await fetch(`${API_URL_USER}?email=${email}&password=${password}`);
    const data = await response.json();

    console.log('API response:', data); // Check the API data structure

    // Check if user exists
    if (data.length === 0) {
      alert('User not found. Please sign up.');
      window.location.reload();
      return;
    }

    const user = data[0];

    // Validate email and password
    if (user.password === password && user.email === email) {
      alert('Login successful! Redirecting...');
      window.location.href = '../public/weather.html'; // Ensure file name is correct
    } else {
      alert('Invalid password. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    alert('An error occurred. Please try again.');
  }
}

// async function FetchDataFrom(email:string,password:string) {
//   try{
//     const response=await fetch(`${API_URL_USER}?email=${email}$password=${password}`);
//     const data=await response.json();
//     if(data.length===0){
//       window.location.reload();
//       return;
//     }
//     const user=data[0]
//     console.log(user)
//     if(user.password ==password){
//       alert('Login successful! Redirecting...');
//       window.location.href = '../public/wather.html';
//       return;
//     }else{
//       alert("Invalid password . please try again.")
//     }
//     alert("sucessfull")
//   }catch(error){
//     alert("try again")
//   }
// }

// Handle form submission
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  FetchDataFrom(email.value.trim(),password.value.trim());
});

// // Add event listeners
email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);
confirmPassword.addEventListener('input', validateForm);



// /////////////////signup page validations//////////////
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm") as HTMLFormElement;
  const fname = document.getElementById("signup-fname") as HTMLInputElement;
  const lname = document.getElementById("signup-lname") as HTMLInputElement;
  const email = document.getElementById("signup-email") as HTMLInputElement;
  const password = document.getElementById("signup-password") as HTMLInputElement;
  const cpassword = document.getElementById("signup-cpassword") as HTMLInputElement;
  const btn = document.getElementById("btn") as HTMLButtonElement;
  const fError = document.getElementById("fError") as HTMLSpanElement;
  const lError = document.getElementById("lError") as HTMLSpanElement;
  const EError = document.getElementById("EError") as HTMLSpanElement;
  const PError = document.getElementById("PError") as HTMLSpanElement;
  const CError = document.getElementById("CError") as HTMLSpanElement;
 
  const isString = (value: string): boolean => /^[A-Za-z]+$/.test(value);
  const validate = () => {
    console.log(fname.value.trim())
    console.log(lname.value.trim()) 
    console.log(email.value.trim())
    console.log(password.value.trim())
    console.log(cpassword.value.trim())
    let isValid = true;

    if (!isString(fname.value)) {
      fError.textContent = "First name must be a string";
      fname.style.borderColor = "red";
      isValid = false;
      console.log(fname.value.trim())
    } else {
      fError.textContent = "";
      fname.style.borderColor = "";
    }

    if (!isString(lname.value)) {
      lError.textContent = "Last name must be a string";
      lname.style.borderColor = "red";
      isValid = false;
    } else {
      lError.textContent = "";
      lname.style.borderColor = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      EError.textContent = "Invalid email format(example.abac@ssw.com)";
      email.style.borderColor = "red";
      isValid = false;
    } else {
      EError.textContent = "";
      email.style.borderColor = "";
    }

    if (password.value.length < 6) {
      PError.textContent = "Password must be at least 6 characters";
      password.style.borderColor = "red";
      isValid = false;
    } else {
      PError.textContent = "";
      password.style.borderColor = "";
    }

    if (password.value !== cpassword.value) {
      CError.textContent = "Passwords do not match";
      cpassword.style.borderColor = "red";
      isValid = false;
    } else {
      CError.textContent = "";
      cpassword.style.borderColor = "";
    }

    btn.disabled = !isValid;
    btn.style.backgroundColor = isValid ? "green" : "gray";
  };

  form.addEventListener("input", validate);

  form.addEventListener("submit", async(e:Event) => {
    e.preventDefault();
    if (!btn.disabled) {
      const userData={
        firstName:fname.value.trim(),
        lastName:lname.value.trim(),
        email:email.value.trim(),
        password:password.value.trim(),
      };
      try {
        const response = await fetch(API_URL_USER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        if(response.ok){
          alert("User registered successfully!");
          form.reset();
          btn.disabled=true;
          btn.style.backgroundColor="gray";
        }else{
          alert("Failed to register user!");
        }
      // alert("Form submitted successfully!");
      // loginForm.classList.remove('hidden');
      // signupForm.classList.add('hidden');
      // loginTab.classList.add('border-blue-600');
      // signupTab.classList.remove('border-blue-600');
    }catch(error){
      alert("An error occurred while registering the user.");
    }
  }
    // window.location.reload();
  });
});
// type UserDatas={
  
// }
// function handleUserRole(user:string) {
//   if (user.role === "Admin" || user.role === "Super Admin") {
//     window.location.href="/Week-3/day-4/public/index.html"
//    } else if (user.role === "Customer") {
//     window.location.href = "/Week-3/day-4/public/customer.html";
//     localStorage.setItem("username", user.username); // Store username in local storage
//   }
// }







 
 