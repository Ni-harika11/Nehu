"use strict";
//form validations login and sigup pages or tabes
// TypeScript Signup Form
const API_URL_USER = `http://localhost:3000`;
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
// // ///Tab 
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
// // Email validation on form login page
const form = document.getElementById('loginForm');
const email = document.getElementById('login-email');
const password = document.getElementById('login-password');
const confirmPassword = document.getElementById('confirm-password');
const button = document.getElementById('button');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmpasswordError');
// // Disable button by default
button.disabled = true;
button.classList.add('bg-gray-400', 'hover:bg-gray-400');
// // Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // Function to validate form
function validateForm() {
    let isValid = true;
    //   // Email validation
    if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Invalid email format';
        email.classList.add('border-red-500');
        isValid = false;
    }
    else {
        emailError.textContent = '';
        email.classList.remove('border-red-500');
    }
    //   // Password match validation
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPassword.classList.add('border-red-500');
        isValid = false;
    }
    else {
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
    }
    else {
        button.disabled = true;
        button.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        button.classList.add('bg-gray-400', 'hover:bg-gray-400');
    }
}
// // Add event listeners
email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);
confirmPassword.addEventListener('input', validateForm);
// // Prevent form submission for now
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    window.location.reload();
});
// /////////////////signup page validations//////////////
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");
    const fname = document.getElementById("signup-fname");
    const lname = document.getElementById("signup-lname");
    const email = document.getElementById("signup-email");
    const password = document.getElementById("signup-password");
    const cpassword = document.getElementById("signup-cpassword");
    const btn = document.getElementById("btn");
    const fError = document.getElementById("fError");
    const lError = document.getElementById("lError");
    const EError = document.getElementById("EError");
    const PError = document.getElementById("PError");
    const CError = document.getElementById("CError");
    //   // declare const Swal: any;
    const isString = (value) => /^[A-Za-z]+$/.test(value);
    const validate = () => {
        let isValid = true;
        if (!isString(fname.value)) {
            fError.textContent = "First name must be a string";
            fname.style.borderColor = "red";
            isValid = false;
        }
        else {
            fError.textContent = "";
            fname.style.borderColor = "";
        }
        if (!isString(lname.value)) {
            lError.textContent = "Last name must be a string";
            lname.style.borderColor = "red";
            isValid = false;
        }
        else {
            lError.textContent = "";
            lname.style.borderColor = "";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            EError.textContent = "Invalid email format(example.abac@ssw.com)";
            email.style.borderColor = "red";
            isValid = false;
        }
        else {
            EError.textContent = "";
            email.style.borderColor = "";
        }
        if (password.value.length < 6) {
            PError.textContent = "Password must be at least 6 characters";
            password.style.borderColor = "red";
            isValid = false;
        }
        else {
            PError.textContent = "";
            password.style.borderColor = "";
        }
        if (password.value !== cpassword.value) {
            CError.textContent = "Passwords do not match";
            cpassword.style.borderColor = "red";
            isValid = false;
        }
        else {
            CError.textContent = "";
            cpassword.style.borderColor = "";
        }
        btn.disabled = !isValid;
        btn.style.backgroundColor = isValid ? "green" : "gray";
    };
    form.addEventListener("input", validate);
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!btn.disabled) {
            alert("Form submitted successfully!");
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            loginTab.classList.add('border-blue-600');
            signupTab.classList.remove('border-blue-600');
        }
        window.location.reload();
    });
});
