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
var API_URL = "http://localhost:3000";
var API_URL_USER = "".concat(API_URL, "/userdata");
var tableBody = document.querySelector("#user-table tbody");
//Fetch data from API
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(API_URL_USER)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    err_1 = _a.sent();
                    console.log("Error Fetching data:", err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
///Render users in the table
function renderData() {
    return __awaiter(this, void 0, void 0, function () {
        var userData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getData()];
                case 1:
                    userData = _a.sent();
                    tableBody.innerHTML = "";
                    if (!userData.length) {
                        tableBody.innerHTML = "<tr><td colspan='9'>No users found.</td></tr>";
                        return [2 /*return*/];
                    }
                    userData.forEach(function (user) {
                        var _a, _b, _c;
                        var companyName = (_a = user.company) === null || _a === void 0 ? void 0 : _a.name;
                        var companyWebsite = (_b = user.company) === null || _b === void 0 ? void 0 : _b.website;
                        var city = (_c = user.address) === null || _c === void 0 ? void 0 : _c.city;
                        var row = document.createElement("tr");
                        row.innerHTML = "\n      <td>".concat(user.id, "</td>\n      <td>").concat(user.fname, "</td>\n      <td>").concat(user.lname, "</td>\n      <td>").concat(user.email, "</td>\n      <td>").concat(city, "</td>\n      <td>").concat(user.role, "</td>\n      <td>").concat(user.phone, "</td>\n      <td><a href=\"").concat(companyWebsite, "\" target=\"_blank>").concat(companyWebsite, "</a></td>\n      <td>").concat(companyName, "</td>\n      <td>\n        <button class=\"edit-btn\" onclick=\"editUser(").concat(user.id, ")\">\u270F\uFE0F</button>\n        <button class=\"delete-btn\" data-id=\"").concat(user.id, "\">\u274C</button>\n      </td>");
                        tableBody.appendChild(row);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
//Add new User
function AddUser() {
    return __awaiter(this, void 0, void 0, function () {
        var fname, lname, email, address, role, phone, website, company, newUser, response, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fname = document.getElementById("fname").value.trim();
                    lname = document.getElementById("lname").value.trim();
                    email = document.getElementById("email").value.trim();
                    address = document.getElementById("address").value.trim();
                    role = document.getElementById("role").value.trim();
                    phone = document.getElementById("website").value.trim();
                    website = document.getElementById("website").value.trim();
                    company = document.getElementById("company").value.trim();
                    newUser = {
                        fname: fname,
                        lname: lname,
                        email: email,
                        address: address,
                        role: role,
                        phone: phone,
                        company: company
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(API_URL_USER, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(newUser)
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, renderData()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
////Delete user by ID
function DeleteData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!confirm("Are you sure you want to delete this user? This action cannot be undone.")) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("".concat(API_URL_USER, "/").concat(id), {
                            method: "DELETE",
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Failed to delete user");
                    return [4 /*yield*/, renderData()];
                case 3:
                    _a.sent(); //Refershe table
                    alert("user deleted successfully.");
                    console.log("user with ID ".concat(id, " deleted."));
                    return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    alert("failed to delete user. please try again.");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
///Attach event listesenrs for dlelete table
var deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        var target = e.target;
        if (target) {
            var userId = Number(target.getAttribute("data-id"));
            DeleteData(userId);
        }
    });
});
//Initial rendering of user data
renderData();
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
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(API_URL_USER, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(userData),
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
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
    return __awaiter(this, void 0, void 0, function () {
        var newUsersData, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    newUsersData = getUserData();
                    return [4 /*yield*/, addUser(JSON.stringify(newUsersData))];
                case 2:
                    _a.sent();
                    closeModal();
                    return [4 /*yield*/, renderData()];
                case 3:
                    _a.sent();
                    console.log("user added succefully");
                    return [3 /*break*/, 5];
                case 4:
                    err_4 = _a.sent();
                    console.log("error detecting user:", err_4);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
///
var employeeForm = document.getElementById("employeeForm");
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
    return __awaiter(this, void 0, void 0, function () {
        var response, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("".concat(API_URL_USER, "/").concat(userId), {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(updatedData)
                    })];
                case 1:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    error = _a.sent();
                    console.log(error.meassage);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
//////affter the sucessfully editied --remove from backend
function closeEditModal() {
    document.getElementById("editUserForm").reset(),
        document.getElementById("editUsersModal").classList.remove("show"),
        document.body.classList.remove("modal-open");
}
function handleEditFormSubmit(event, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var Data, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    Data = getUserData();
                    return [4 /*yield*/, updateUser(userId, Data)];
                case 2:
                    _a.sent();
                    closeEditModal();
                    return [4 /*yield*/, renderData()];
                case 3:
                    _a.sent();
                    console.log("Updated successfully");
                    return [3 /*break*/, 5];
                case 4:
                    err_5 = _a.sent();
                    console.error("Error updating user:", err_5);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
//// Attach event listener to form for edit (dynamic)
function attachEditFormListener(userId) {
    var form = document.getElementById("editUsersModal");
    form.onsubmit = function (event) { return handleEditFormSubmit(event, userId); };
}
/////// When user clicks "Edit" button
function editUser(userId) {
    fetch("".concat(API_URL_USER, "/").concat(userId))
        .then(function (response) { return response.json(); })
        .then(function (user) {
        fillEditForm(user);
        attachEditFormListener(userId);
        //show the modal after filling the from
        document.getElementById("editUsersModal").classList.add("show"),
            document.body.classList.add("modal-open");
    })
        .catch(function (err) {
        console.log(err);
    });
}
