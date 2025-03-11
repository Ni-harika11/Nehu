"use strict";
// Get elements
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
// const btn=document.getElementById("button")as HTMLButtonElement;
// const email = document.getElementById('login-email') as HTMLInputElement;
// const emailError = document.getElementById('emailError') as HTMLSpanElement;
// const password=document.getElementById("login-password")as HTMLInputElement;
// const passworderror=document.getElementById("passwordError") as HTMLSpanElement;
// const confirmpass=document.getElementById("confirm-password")as HTMLInputElement;
// const confiPass=document.getElementById("confirmpasswordError") as HTMLSpanElement;
// const Email=email.value.trim();
// const Password=password.value.trim();
// const CPasword=confirmpass.value.trim();
// const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.(com)$/;
// Event listeners for tab switching
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
// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // if(Email===''&& Password===''&& CPasword===''){
//     //     btn.disabled=true;
//     //     btn.classList.add('bg-gray-400', 'cursor-not-allowed', 'opacity-50');
//     //     btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
//     // }else{
//     //     btn.disabled=false
//     //     btn.classList.remove('bg-gray-400', 'cursor-not-allowed', 'opacity-50');
//     //     btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
//     // }
//     if (!email || !emailError) return; // Ensure elements exist
//     const emailValue = email.value.trim();
//     if (emailValue === '') {
//         emailError.textContent = 'Email cannot be empty';
//         return;
//     }
//     if (!emailPattern.test(emailValue)) {
//         emailError.textContent = 'Invalid email format (e.g., example@domain.com)';
//         email.classList.add('border-red-500', 'shadow-2xl', 'shadow-red-600/90', 'ring-2', 'ring-red-500');
//         // email.classList.add('border-red-500', 'shadow-lg', 'shadow-red-500/80');hover:shadow-md hover:shadow-blue-500/50 'shadow-red-600/90',
//         return;
//     } else {
//         // Remove error styles if the email is valid
//         email.classList.remove('border-red-500', 'shadow-lg', 'shadow-red-500/80');
//     }
//     emailError.textContent = ''; // Clear error if valid
//     console.log('Form submitted successfully with Email:', emailValue);
// });
const form = document.getElementById('loginForm');
const email = document.getElementById('login-email');
const password = document.getElementById('login-password');
const confirmPassword = document.getElementById('confirm-password');
const button = document.getElementById('button');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmpasswordError');
// Disable button by default
button.disabled = true;
button.classList.add('bg-gray-400', 'hover:bg-gray-400');
// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Function to validate form
function validateForm() {
    let isValid = true;
    // Email validation
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Invalid email format';
        email.classList.add('border-red-500');
        isValid = false;
    }
    else {
        emailError.textContent = '';
        email.classList.remove('border-red-500');
    }
    // Password match validation
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPassword.classList.add('border-red-500');
        isValid = false;
    }
    else {
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
    }
    else {
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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    window.location.reload();
});
