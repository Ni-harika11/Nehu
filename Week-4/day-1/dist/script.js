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
// const API_URL= `http://localhost:3000`;
// const API_URL_USER=`${API_URL}/users`;
const tableBody = document.querySelector("#user-table tbody");
//Fetch data from API
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(API_URL_USER);
            return yield response.json();
        }
        catch (err) {
            console.log("Error Fetching data:", err);
        }
    });
}
///Render users in the table
function renderData() {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield getData();
        tableBody.innerHTML = "";
        if (!userData.length) {
            tableBody.innerHTML = "<tr><td colspan='9'>No users found.</td></tr>";
            return;
        }
        userData.forEach((user) => {
            var _a, _b, _c;
            const companyName = (_a = user.company) === null || _a === void 0 ? void 0 : _a.name;
            const companyWebsite = (_b = user.company) === null || _b === void 0 ? void 0 : _b.website;
            const city = (_c = user.address) === null || _c === void 0 ? void 0 : _c.city;
            const row = document.createElement("tr");
            row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.fname}</td>
      <td>${user.lname}</td>
      <td>${user.email}</td>
      <td>${city}</td>
      <td>${user.role}</td>
      <td>${user.phone}</td>
      <td><a href="${companyWebsite}" target="_blank>${companyWebsite}</a></td>
      <td>${companyName}</td>
      <td>
        <button class="edit-btn" onclick="editUser(${user.id})">✏️</button>
        <button class="delete-btn" data-id="${user.id}">❌</button>
      </td>`;
            tableBody.appendChild(row);
        });
        // attachDeleteListeners(); // Reattach listeners after rendering
    });
}
//Add new User
function AddUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const fname = document.getElementById("fname").value.trim();
        const lname = document.getElementById("lname").value.trim();
        const email = document.getElementById("email").value.trim();
        const address = document.getElementById("address").value.trim();
        const role = document.getElementById("role").value.trim();
        const phone = document.getElementById("website").value.trim();
        const website = document.getElementById("website").value.trim();
        const company = document.getElementById("company").value.trim();
        const newUser = {
            fname: fname,
            lname: lname,
            email: email,
            address: address,
            role: role,
            phone: phone,
            company: company
        };
        try {
            const response = yield fetch(API_URL_USER, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            });
            yield renderData();
        }
        catch (err) {
            console.log(err);
        }
    });
}
////Delete user by ID
function DeleteData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
            try {
                const response = yield fetch(`${API_URL_USER}/${id}`, {
                    method: "DELETE",
                });
                if (!response.ok)
                    throw new Error("Failed to delete user");
                yield renderData(); //Refershe table
                alert("user deleted successfully.");
                console.log(`user with ID ${id} deleted.`);
            }
            catch (err) {
                alert("failed to delete user. please try again.");
            }
        }
    });
}
///Attach event listesenrs for dlelete table
const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const target = e.target;
        if (target) {
            const userId = Number(target.getAttribute("data-id"));
            DeleteData(userId);
        }
    });
});
//Initial rendering of user data
renderData();
// type UserData={
//     UsrCity?:string
//     city?:string;
//     website?:string;
//     name?:string;
//     fname:string;
//     lname:string;
//     email:string;
//     address:string;
//     role:string;
//     phone:number;
//     company:string;
// }
function getUserData() {
    return {
        fname: document.getElementById("fname").value.trim(),
        lname: document.getElementById("lname").value.trim(),
        email: document.getElementById("email").value.trim(),
        address: {
            city: document.getElementById("address").value.trim()
        },
        role: document.getElementById("role").value.trim(),
        phone: Number(document.getElementById("phone").value.trim()), // ADDED THIS
        company: {
            website: document.getElementById("website").value.trim(),
            name: document.getElementById("company").value.trim(),
        }
    };
}
//send POST request to add user
function addUser(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(API_URL_USER, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
    });
}
function closeModal() {
    document.getElementById("employeeForm").reset(),
        document.getElementById("addEmployeeModal").classList.remove("show"),
        document.getElementById(".modal-backdrop").remove();
}
///////
function handleFormSubmit(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        try {
            const newUsersData = getUserData();
            yield addUser(JSON.stringify(newUsersData));
            closeModal();
            yield renderData();
            console.log("user added succefully");
        }
        catch (err) {
            console.log("error detecting user:", err);
        }
    });
}
///
// const employeeForm=document.getElementById("employeeForm")as HTMLInputElement;
employeeForm.addEventListener("submit", handleFormSubmit);
function fillEditForm(user) {
    document.getElementById("fname").value = user.fname;
    document.getElementById("lname").value = user.lname;
    document.getElementById("email").value = user.email;
    document.getElementById("address").value = user.address;
    document.getElementById("role").value = user.role;
    document.getElementById("phone").value = user.phone.toString();
    document.getElementById("website").value = user.company.website;
    document.getElementById("company").value = user.company.name;
}
// sned the UserId n backend
function updateUser(userId, updatedData) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${API_URL_USER}/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData)
        });
        if (!response.ok) {
            const error = yield response.json();
            console.log(error.meassage);
        }
    });
}
//////affter the sucessfully editied --remove from backend
function closeEditModal() {
    document.getElementById("editUserForm").reset(),
        document.getElementById("editUsersModal").classList.remove("show"),
        document.body.classList.remove("modal-open");
}
function handleEditFormSubmit(event, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        try {
            const Data = getUserData();
            yield updateUser(userId, Data);
            closeEditModal();
            yield renderData();
            console.log("Updated successfully");
        }
        catch (err) {
            console.error("Error updating user:", err);
        }
    });
}
//// Attach event listener to form for edit (dynamic)
function attachEditFormListener(userId) {
    const form = document.getElementById("editUsersModal");
    form.onsubmit = (event) => handleEditFormSubmit(event, userId);
}
/////// When user clicks "Edit" button
function editUser(userId) {
    fetch(`${API_URL_USER}/${userId}`)
        .then((response) => response.json())
        .then((user) => {
        fillEditForm(user);
        attachEditFormListener(userId);
        //show the modal after filling the from
        document.getElementById("editUsersModal").classList.add("show"),
            document.body.classList.add("modal-open");
    })
        .catch((err) => {
        console.log(err);
    });
}
