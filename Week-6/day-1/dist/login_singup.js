"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//form validations login and sigup pages or tabes
// TypeScript Signup Form
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/user`;
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
//Tab
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
// // Prevent form submission for now
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    window.location.reload();
});
function FetchDataFrom(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${API_URL_USER}?email=${email}$password=${password}`);
            const data = yield response.json();
            if (data.length === 0) {
                window.location.reload();
                return;
            }
            const user = data[0];
            if (user.password !== password) {
                alert('Login successful! Redirecting...');
                window.location.href = '';
                return;
            }
            else {
                alert("Invalid password . please try again.");
            }
            alert("sucessfull");
        }
        catch (error) {
            alert("try again");
        }
    });
}
// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    FetchDataFrom(email.value.trim(), password.value.trim());
});
// // Add event listeners
email.addEventListener('input', validateForm);
password.addEventListener('input', validateForm);
confirmPassword.addEventListener('input', validateForm);
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
    const isString = (value) => /^[A-Za-z]+$/.test(value);
    const validate = () => {
        console.log(fname.value.trim());
        console.log(lname.value.trim());
        console.log(email.value.trim());
        console.log(password.value.trim());
        console.log(cpassword.value.trim());
        let isValid = true;
        if (!isString(fname.value)) {
            fError.textContent = "First name must be a string";
            fname.style.borderColor = "red";
            isValid = false;
            console.log(fname.value.trim());
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
    form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if (!btn.disabled) {
            const userData = {
                firstName: fname.value.trim(),
                lastName: lname.value.trim(),
                email: email.value.trim(),
                password: password.value.trim(),
            };
            try {
                const response = yield fetch(API_URL_USER, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                });
                if (response.ok) {
                    alert("User registered successfully!");
                    form.reset();
                    btn.disabled = true;
                    btn.style.backgroundColor = "gray";
                }
                else {
                    alert("Failed to register user!");
                }
                // alert("Form submitted successfully!");
                // loginForm.classList.remove('hidden');
                // signupForm.classList.add('hidden');
                // loginTab.classList.add('border-blue-600');
                // signupTab.classList.remove('border-blue-600');
            }
            catch (error) {
                alert("An error occurred while registering the user.");
            }
        }
        // window.location.reload();
    }));
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
