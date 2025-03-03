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
// const API_URL= "http://localhost:3000";
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
            fname: { 'fname': fname }
        };
    });
}
