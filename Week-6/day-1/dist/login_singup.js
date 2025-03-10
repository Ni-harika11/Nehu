"use strict";
// Get elements
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const btn = document.getElementById("button");
const email = document.getElementById('login-email');
const emailError = document.getElementById('emailError');
const password = document.getElementById("login-password");
const passworderror = document.getElementById("passwordError");
const confirmpass = document.getElementById("confirm-password");
const confiPass = document.getElementById("confirmpasswordError");
const Email = email.value.trim();
const Password = password.value.trim();
const CPasword = confirmpass.value.trim();
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.(com)$/;
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
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Email === '' && Password === '' && CPasword === '') {
        btn.disabled = true;
        btn.classList.add('bg-gray-400', 'cursor-not-allowed', 'opacity-50');
        btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
    }
    else {
        btn.disabled = false;
        btn.classList.remove('bg-gray-400', 'cursor-not-allowed', 'opacity-50');
        btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
    }
    if (!email || !emailError)
        return; // Ensure elements exist
    const emailValue = email.value.trim();
    if (emailValue === '') {
        emailError.textContent = 'Email cannot be empty';
        return;
    }
    if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'Invalid email format (e.g., example@domain.com)';
        email.classList.add('border-red-500', 'shadow-2xl', 'shadow-red-600/90', 'ring-2', 'ring-red-500');
        // email.classList.add('border-red-500', 'shadow-lg', 'shadow-red-500/80');hover:shadow-md hover:shadow-blue-500/50 'shadow-red-600/90',
        return;
    }
    else {
        // Remove error styles if the email is valid
        email.classList.remove('border-red-500', 'shadow-lg', 'shadow-red-500/80');
    }
    emailError.textContent = ''; // Clear error if valid
    console.log('Form submitted successfully with Email:', emailValue);
});
