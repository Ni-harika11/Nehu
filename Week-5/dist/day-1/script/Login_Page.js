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
document.addEventListener("DOMContentLoaded", function () {
    const Login_Form = document.getElementById("loginFormElement");
    let UserEmail = document.getElementById("loginFormElement");
    let UserPassword = document.getElementById("login-password");
    Login_Form.addEventListener('submit', function (e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            if (UserEmail.value.trim() === "" || UserEmail.value.trim() === "") {
                alert("please fill in both fields");
                return;
            }
            //Email validations
            const emailPatr = /^[a-zA-A0-9][._%+-]*@[a-zA-Z]+\.(com)$/;
            if (!emailPatr.test(UserEmail.value.trim())) {
                alert("please enetr a valid email (e.g., example@domain.com)");
                return;
            }
            //fetch user data
            yield FetchDataFrom({ email: UserEmail.value.trim(),
                password: UserPassword.value.trim() });
        });
    });
});
function handleUserRole(user) {
    if (user.role === "Admin" || user.role === "Super Admin") {
        window.location.href = ""; ///Add path here
    }
    else if (user.role === "Customer") {
        window.location.href = "/"; //add path here
        localStorage.setItem("username", user.username); // Store username in local storage
    }
}
function FetchDataFrom(val) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = val;
            const response = yield fetch(`${API_URL_USER}?email=${email}&password=${password}`);
            const data = yield response.json();
            if (data.length === 0) {
                alert("User not found");
                return;
            }
            const user = data[0];
            if (user.password != password) {
                alert("incorect password");
                return;
            }
            //show success alter and handle redirections
            alert("login successful");
            handleUserRole(user);
        }
        catch (error) {
            console.log(error);
        }
    });
}
////////modal data
//store the data 
const employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    handleFormSubmission();
});
function getFormData() {
    // const {fname,lname,email,address,password,role,phone,website,company}=va
    return {
        fname: document.getElementById('fname').value.trim(),
        lname: document.getElementById('lname').value.trim(),
        email: document.getElementById('email').value.trim(),
        address: document.getElementById('address').value.trim(),
        password: document.getElementById('password').value.trim(),
        role: document.getElementById('role').value,
        phone: document.getElementById('phone').value.trim(),
        website: document.getElementById('website').value.trim(),
        company: document.getElementById('company').value.trim()
    };
}
///Validate the from data
function ValidateFormData(data) {
    let isValid = true;
    if (data.fname == "") {
        const firstError = document.getElementById("firstError");
        if (firstError)
            firstError.textContent = "First name are required";
        isValid = false;
    }
    if (data.lname == "") {
        const lastError = document.getElementById("lastError");
        if (lastError)
            lastError.textContent = "last nae is required";
        isValid = false;
    }
    const phonePattern = /^[6-9]\d{10}$/;
    if (!phonePattern.test(data.phone.trim())) {
        const phoneError = document.getElementById("phoneError");
        if (phoneError)
            phoneError.textContent = "Invalid Phone number";
        isValid = false;
    }
    if (data.password.trim() == "") {
        const passwordError = document.getElementById("passwordError");
        if (passwordError)
            passwordError.textContent = "Password must be required";
        isValid = false;
    }
    return isValid;
}
///post data to JSON Server
function addUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(API_URL_USER, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                alert("failed to add user");
            }
            alert("user added successfully");
            employeeForm.reset(); //clear the form
            document.getElementById('addEmployeeModal').style.display = 'none';
        }
        catch (err) {
            console.log(err);
            alert("something went wrong . please try again.");
        }
    });
}
///Handle form submission
function handleFormSubmission() {
    const formData = getFormData();
    //clear privieous error message
    clearErrors();
    ;
    if (ValidateFormData(formData)) {
        addUser(formData);
    }
}
function clearErrors() {
    const errorIds = ['firstError', 'lastError', 'emailError', 'phoneError', 'passwordError'];
    errorIds.forEach((id) => {
        document.getElementById(id).textContent = "";
    });
}
