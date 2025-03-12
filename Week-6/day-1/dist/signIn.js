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
const API_User = `http://localhost:3000/user`;
// Get the form element
const signUpForm = document.getElementById("signUpForm");
signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    handleFormSubmission();
});
// Collect form data
function getFormData() {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    return { fname, lname, email, password };
}
// Validate form data
function validateFormData(data) {
    let isValid = true;
    if (!data.fname) {
        const firstError = document.getElementById("firsterror");
        if (firstError)
            firstError.textContent = 'First name is required';
        isValid = false;
    }
    if (!data.email) {
        alert('Email is required');
        isValid = false;
    }
    if (!data.password) {
        alert('Password is required');
        isValid = false;
    }
    return isValid;
}
// Post data to JSON server
function addUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(API_User, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Failed to add user');
            }
            alert("User added successfully");
            signUpForm.reset();
        }
        catch (error) {
            console.error(error);
            alert("An error occurred while adding the user.");
        }
    });
}
// Handle form submission
function handleFormSubmission() {
    const formData = getFormData();
    if (validateFormData(formData)) {
        addUser(formData);
    }
}
