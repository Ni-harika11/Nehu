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
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/users`;
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginFormElement');
    const userEmail = document.getElementById("login-email");
    const userPassword = document.getElementById("login-password");
    loginForm.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if (!userEmail.value.trim() || !userPassword.value.trim()) {
            alert("Please fill in both fields");
            return;
        }
        const emailPattern = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.(com)$/;
        if (!emailPattern.test(userEmail.value.trim())) {
            alert("Please enter a valid email (e.g., example@domain.com)");
            return;
        }
        yield fetchDataFrom(userEmail.value.trim(), userPassword.value.trim());
    }));
});
function handleUserRole(user) {
    if (user.role === "Admin" || user.role === "Super Admin") {
        window.location.href = "/Week-3/day-4/public/index.html";
    }
    else if (user.role === "Customer") {
        window.location.href = "/Week-3/day-4/public/customer.html";
        localStorage.setItem("username", user.username);
    }
}
function fetchDataFrom(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${API_URL_USER}?email=${email}&password=${password}`);
            const data = yield response.json();
            if (data.length === 0) {
                alert("User not found");
                return;
            }
            const user = data[0];
            if (user.password !== password) {
                alert("Incorrect password");
                return;
            }
            alert("Login successful!");
            handleUserRole(user);
        }
        catch (error) {
            console.error("Error fetching user data:", error);
        }
    });
}
const employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleFormSubmission();
});
function getFormData() {
    return {
        fnam: document.getElementById('fname').value.trim(),
        lname: document.getElementById('lname').value.trim(),
        email: document.getElementById('email').value.trim(),
        address: document.getElementById('address').value.trim(),
        password: document.getElementById('password').value.trim(),
        role: document.getElementById('role').value,
        phone: document.getElementById('phone').value.trim(),
        website: document.getElementById('website').value.trim(),
        company: document.getElementById('company').value.trim(),
    };
}
function validateFormData(data) {
    let isValid = true;
    if (!data.fnam) {
        document.getElementById("firstError").textContent = "First name is required";
        isValid = false;
    }
    if (!data.lname) {
        document.getElementById("lastError").textContent = "Last name is required";
        isValid = false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(data.email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(data.phone)) {
        document.getElementById("phoneError").textContent = "Invalid phone number.";
        isValid = false;
    }
    if (!data.password) {
        document.getElementById("passwordError").textContent = "Password is required";
        isValid = false;
    }
    return isValid;
}
function addUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(API_URL_USER, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                alert("Failed to add user");
                return;
            }
            alert("User added successfully");
            employeeForm.reset();
            $('#addEmployeeModal').modal('hide');
        }
        catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again.");
        }
    });
}
function handleFormSubmission() {
    const formData = getFormData();
    clearErrors();
    if (validateFormData(formData)) {
        addUser(formData);
    }
}
function clearErrors() {
    const errorIds = ['firstError', 'lastError', 'emailError', 'phoneError', 'passwordError'];
    errorIds.forEach(id => {
        document.getElementById(id).textContent = "";
    });
}
