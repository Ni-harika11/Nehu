"use strict";
// Get elements
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
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
////Validations for Login pages
function LoginValidations() {
    const button = document.getElementById("button");
    const emailError = document.getElementById("emailError").value.trim();
    const passwordError = document.getElementById("passwordError").value.trim();
    const confirmpasswordError = document.getElementById("confirmpasswordError").value.trim();
}
