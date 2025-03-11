// Get elements
const loginTab = document.getElementById('loginTab') as HTMLButtonElement;
const signupTab = document.getElementById('signupTab') as HTMLButtonElement;
const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const signupForm = document.getElementById('signupForm') as HTMLFormElement;

///Tab 
loginTab.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginTab.classList.add('border-blue-600');
    signupTab.classList.remove('border-blue-600');
});

signupTab.addEventListener('click', () => {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signupTab.classList.add('border-blue-600');
    loginTab.classList.remove('border-blue-600');
});

// Email validation on form submit
const form = document.getElementById('loginForm') as HTMLFormElement;
const email = document.getElementById('login-email') as HTMLInputElement;
const password = document.getElementById('login-password') as HTMLInputElement;
const confirmPassword = document.getElementById('confirm-password') as HTMLInputElement;
const button = document.getElementById('button') as HTMLButtonElement;
const emailError = document.getElementById('emailError') as HTMLSpanElement;
const passwordError = document.getElementById('passwordError') as HTMLSpanElement;
const confirmPasswordError = document.getElementById('confirmpasswordError') as HTMLSpanElement;

// Disable button by default
button.disabled = true;
button.classList.add('bg-gray-400', 'hover:bg-gray-400');

// Email validation regex
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate form
function validateForm(): void {
  let isValid: boolean = true;

  // Email validation
  if (!emailRegex.test(email.value)) {
    emailError.textContent = 'Invalid email format';
    email.classList.add('border-red-500');
    isValid = false;
  } else {
    emailError.textContent = '';
    email.classList.remove('border-red-500');
  }

  // Password match validation
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
    confirmPassword.classList.add('border-red-500');
    isValid = false;
  } else {
    confirmPasswordError.textContent = '';
    confirmPassword.classList.remove('border-red-500');
  }

  // Check if all fields are filled
  if (!email.value || !password.value || !confirmPassword.value) {
    isValid = false;
  }

  // Enable/disable submit button
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

// Add event listeners
email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);
confirmPassword.addEventListener('input', validateForm);

// Prevent form submission for now
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  alert('Form submitted successfully!');
  window.location.reload();
});

/////////////////signup page validations//////////////
const sform=document.getElementById("signupForm")as HTMLFormElement;
const fname=document.getElementById("signup-fname")as HTMLInputElement;
const lname=document.getElementById("signup-lname")as HTMLInputElement;
const Email=document.getElementById("signup-email")as HTMLInputElement;
const Password=document.getElementById("signup-password")as HTMLInputElement;
const Cpassword=document.getElementById("signup-cpassword")as HTMLInputElement;

//Disbale button by defaul











 
 