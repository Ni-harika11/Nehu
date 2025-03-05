// const API_URL="http://localhost:3000";
// const API_URL_USER=`${API_URL}/users`;
// document.addEventListener("DOMContentLoaded",function(){
//     const Login_Form=document.getElementById("loginFormElement") as HTMLFormElement;
//     let UserEmail=document.getElementById("loginFormElement") as HTMLInputElement ;
//     let UserPassword=document.getElementById("login-password") as HTMLInputElement;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//     Login_Form.addEventListener('submit',async function (e:SubmitEvent)   {
//         e.preventDefault()
//         if(UserEmail.value.trim()==="" || UserEmail.value.trim()===""){
//             alert("please fill in both fields");
//             return ;
//         }
//         //Email validations
//         const emailPatr=/^[a-zA-A0-9][._%+-]*@[a-zA-Z]+\.(com)$/;
//         if(!emailPatr.test(UserEmail.value.trim())){
//             alert("please enetr a valid email (e.g., example@domain.com)")
//             return ;
//         }
//         //fetch user data
//         await FetchDataFrom({email:UserEmail.value.trim(),
//              password:UserPassword.value.trim()}); 
//     })
// });
// type User={
//     user:string;
//     role:string;
//     username:string;
// }
// function handleUserRole(user:User){
//     if(user.role==="Super Admin"){
//         window.location.href="/Week-5/day-1/public/index.html"///Add path here
//     }else if(user.role==="Admin"){
//         window.location.href="/Week-5/day-1/public/"//add path here
//         localStorage.setItem("username",user.username)// Store username in local storage
//     }else if(user.role==="Customer"){
//         window.location.href="/Week-5/day-1/public/customer.html"//add path here
//         localStorage.setItem("username",user.username)// Store username in local storage
//     }
// }
// ////Fetch user data from API and Check password
// type datas={
//     email:string;
//     password:string;
// }
// async function FetchDataFrom(val:datas) {
//     try{
//         const {email,password}=val;
//         const response=await fetch(`${API_URL_USER}?email=${email}&password=${password}`);
//         const data=await response.json();
//         if(data.length===0){
//             alert("User not found");
//             return ;
//         }
//         const user=data[0]
//         if(user.password!=password){
//             alert("incorect password")
//             return;
//         }
//         //show success alter and handle redirections
//         alert("login successful")
//         handleUserRole(user)
//     }catch(error){
//         console.log(error)
//     }
// }
// ////////modal data
// //store the data 
// const employeeForm=document.getElementById("employeeForm") as HTMLFormElement;
// employeeForm.addEventListener('submit',function(e:SubmitEvent){
//     e.preventDefault();
//     handleFormSubmission();
// });
// ///collect from data
// type AllData={
//     fname:string;
//     lname:string;
//     email:string;
//     address:string;
//     password:string;
//     role:string;
//     phone:string;
//     website:string;
//     company:string;
// }
// function getFormData():AllData{
//         // const {fname,lname,email,address,password,role,phone,website,company}=va
//         return {
//             fname:(document.getElementById('fname') as HTMLInputElement).value.trim(),
//             lname:(document.getElementById('lname')as HTMLInputElement).value.trim(),
//             email:(document.getElementById('email')as HTMLInputElement).value.trim(),
//             address:(document.getElementById('address')as HTMLInputElement).value.trim(),
//             password:(document.getElementById('password') as HTMLInputElement).value.trim(),
//             role:(document.getElementById('role')as HTMLInputElement).value,
//             phone:(document.getElementById('phone')as HTMLInputElement).value.trim(),
//             website:(document.getElementById('website')as HTMLInputElement).value.trim(),
//             company:( document.getElementById('company')as HTMLInputElement).value.trim()
//         };
// }
// ///Validate the from data
// function ValidateFormData(data:AllData):boolean{
//     let isValid=true;
//     if(data.fname==""){
//         const firstError=document.getElementById("firstError")
//         if(firstError) firstError.textContent="First name are required";
//         isValid=false;
//     }
//     if(data.lname==""){
//         const lastError=document.getElementById("lastError")
//         if(lastError)lastError.textContent="last nae is required";
//         isValid=false;
//     }
//     const phonePattern=/^[6-9]\d{10}$/;
//     if(!phonePattern.test(data.phone.trim())){
//         const phoneError=document.getElementById("phoneError")
//         if(phoneError)phoneError.textContent="Invalid Phone number";
//         isValid=false;
//     }
//     if(data.password.trim()==""){
//         const passwordError=document.getElementById("passwordError")
//         if(passwordError)passwordError.textContent="Password must be required"
//         isValid=false
//     }
//     return isValid;
// }
// ///post data to JSON Server
// async function addUser(data:AllData) {
//     try{
//         const response=await fetch(API_URL_USER,{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify(data)
//         });
//         if(!response.ok){
//             alert("failed to add user")
//         }
//         alert("user added successfully")
//         employeeForm.reset();//clear the form
//         (document.getElementById('addEmployeeModal') as HTMLElement).style.display = 'none';
//     }catch(err){
//         console.log(err)
//         alert("something went wrong . please try again.")
//     }
// }
// ///Handle form submission
// function handleFormSubmission(){
//     const formData:AllData=getFormData();
//     //clear privieous error message
//     clearErrors();;
//     if(ValidateFormData(formData)){
//         addUser(formData)
//     }
// }
// //clear error meassage
// type Errors={
//     errorId:number;
//     id:number;
// }
// function clearErrors() {
//     const errorIds = ['firstError', 'lastError', 'emailError', 'phoneError', 'passwordError'];
//     errorIds.forEach((id) => {
//         (document.getElementById(id) as HTMLElement).textContent = "";
//     });
// }
var API_URL = "http://localhost:3000";
var API_URL_USER = "".concat(API_URL, "/users");
document.addEventListener("DOMContentLoaded", function () {
    var loginForm = document.getElementById('loginFormElement');
    var userEmail = document.getElementById("login-email");
    var userPassword = document.getElementById("login-password");
    loginForm.addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
        var emailPattern;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!userEmail.value.trim() || !userPassword.value.trim()) {
                        alert("Please fill in both fields");
                        return [2 /*return*/];
                    }
                    emailPattern = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.(com)$/;
                    if (!emailPattern.test(userEmail.value.trim())) {
                        alert("Please enter a valid email (e.g., example@domain.com)");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, fetchDataFrom(userEmail.value.trim(), userPassword.value.trim())];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
function handleUserRole(user) {
    if (user.role === "Admin" || user.role === "Super Admin") {
        window.location.href = "/Week-3/day-4/public/index.html";
    }
    else if (user.role === "Customer") {
        window.location.href = "/Week-3/day-4/public/customer.html";
        localStorage.setItem("username", user.username || "");
    }
}
function fetchDataFrom(email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("".concat(API_URL_USER, "?email=").concat(email, "&password=").concat(password))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (data.length === 0) {
                        alert("User not found");
                        return [2 /*return*/];
                    }
                    user = data[0];
                    if (user.password !== password) {
                        alert("Incorrect password");
                        return [2 /*return*/];
                    }
                    alert("Login successful!");
                    handleUserRole(user);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error fetching user data:", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener('submit', function (e) {
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
    var isValid = true;
    if (!data.fnam) {
        document.getElementById("firstError").textContent = "First name is required";
        isValid = false;
    }
    if (!data.lname) {
        document.getElementById("lastError").textContent = "Last name is required";
        isValid = false;
    }
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(data.email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }
    var phonePattern = /^[6-9]\d{9}$/;
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
    return __awaiter(this, void 0, void 0, function () {
        var response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch(API_URL_USER, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(data),
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        alert("Failed to add user");
                        return [2 /*return*/];
                    }
                    alert("User added successfully");
                    employeeForm.reset();
                    $('#addEmployeeModal').modal('hide');
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    alert("Something went wrong. Please try again.");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleFormSubmission() {
    var formData = getFormData();
    clearErrors();
    if (validateFormData(formData)) {
        addUser(formData);
    }
}
function clearErrors() {
    var errorIds = ['firstError', 'lastError', 'emailError', 'phoneError', 'passwordError'];
    errorIds.forEach(function (id) {
        document.getElementById(id).textContent = "";
    });
}
