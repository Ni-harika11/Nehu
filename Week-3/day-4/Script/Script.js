const tableBody = document.querySelector("#user-table tbody");
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/users`;

// Fetch data from API
async function getData() {
  try {
    const response = await fetch(API_URL_USER);
    // if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (err) {
    console.error("Error fetching data:", err);
    // return []; // Ensure the app doesn’t break
  }
}

// Render users in the table
async function renderData() {
  const userData = await getData();
  tableBody.innerHTML = ""; // Clear previous data

  if (!userData.length) {
    tableBody.innerHTML = "<tr><td colspan='9'>No users found.</td></tr>";
    return;
  }

  userData.forEach((user) => {
    const companyName = user.company?.name ;
    const companyWebsite = user.company?.website ;
    const city = user.address?.city ;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.id }</td>
      <td>${user.fname }</td>
      <td>${user.lname }</td>
      <td>${user.email }</td> 
      <td>${city}</td>
      <td>${user.role }</td>
      <td>${user.phone }</td>
      <td><a href="${companyWebsite}" target="_blank">${companyWebsite}</a></td>
      <td>${companyName}</td>
      <td>
        <button class="edit-btn" onclick="editUser(${user.id})">✏️</button>
        <button class="delete-btn" data-id="${user.id}">❌</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  attachDeleteListeners(); // Reattach listeners after rendering
}

// Add new user
async function AddUser() {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const role = document.getElementById("role").value;
  const phone = document.getElementById("phone").value.trim();
  const website = document.getElementById("website").value.trim();
  const company = document.getElementById("company").value.trim();

  const newUser = {
    fname:{'fname':fname},
    lname:{'lname':lname},
    email:{'email':email},
    address: { city: address },
    role:{"role":role},
    phone:{"phone":phone},
    company: { website, name: company },
  };

  try {
    const response = await fetch(API_URL_USER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    await renderData();
    console.log("User added successfully.");
  } catch (err) {
    console.error("Error adding user:", err);
  }
}

// Delete user by ID
async function DeleteData(id) {
  if (
    confirm(
      "Are you sure you want to delete this user? This action cannot be undone."
    )
  ) {
    try {
      const response = await fetch(`${API_URL_USER}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete user");

      await renderData(); // Refresh table
      alert("User deleted successfully.");
      console.log(`User with ID ${id} deleted.`);
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("Failed to delete user. Please try again.");
    }
  }
}
// Attach event listeners for delete buttons
function attachDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const userId = e.target.getAttribute("data-id");
      DeleteData(userId);
    });
  });
}

// Initial rendering of user data
renderData();

// // AddUser()
// Collect user data from form fields
function getUserData() {
  return {
    fname: document.getElementById("fname").value.trim(),
    lname: document.getElementById("lname").value.trim(),
    email: document.getElementById("email").value.trim(),
    address: { city: document.getElementById("address").value.trim() },
    role: document.getElementById("role").value,
    phone: document.getElementById("phone").value.trim(),
    company: {
      website: document.getElementById("website").value.trim(),
      name: document.getElementById("company").value.trim(),
    },
  };
}

// Send POST request to add user
async function addUser(userData) {
  const response = await fetch(API_URL_USER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  // if (!response.ok) {
  //   throw new Error("Failed to add user");
  // }
}

function closeModal() {
  document.getElementById("employeeForm").reset();
  document.getElementById("addEmployeeModal").classList.remove("show");
  document.querySelector(".modal-backdrop").remove();
}

async function handleFormSubmit(event) {
  event.preventDefault();
  try {
    const newUser = getUserData();
    await addUser(newUser);
    closeModal();
    await renderData();
    console.log("User added successfully.");
  } catch (err) {
    console.error("Error adding user:", err);
  }
}

const employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener("submit", handleFormSubmit);

/////Editi
//get all the inputs from Form:
function getUserData() {
  return {
    fname: document.getElementById("fname").value.trim(),
    lname: document.getElementById("lname").value.trim(),
    email: document.getElementById("email").value.trim(),
    address: { city: document.getElementById("address").value.trim() },
    role: document.getElementById("role").value,
    phone: document.getElementById("phone").value.trim(),
    company: {
      website: document.getElementById("website").value.trim(),
      name: document.getElementById("company").value.trim(),
    },
  };
}


////When click edit it will  automatically fill the edit options all 
function fillEditForm(user) {
  document.getElementById("fname").value = user.fname;
  document.getElementById("lname").value = user.lname;
  document.getElementById("email").value = user.email;
  document.getElementById("address").value = user.address.city;
  document.getElementById("role").value = user.role;
  document.getElementById("phone").value = user.phone;
  document.getElementById("website").value = user.company.website;
  document.getElementById("company").value = user.company.name;
}

// sned the UserId n backend
async function updateUser(userId, updatedData) {
  const response = await fetch(`${API_URL_USER}/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
}
////affter the sucessfully editied --remove from backend
function closeEditModal() {
  document.getElementById("employeeForm").reset();
  document.getElementById("addEmployeeModal").classList.remove("show");
  document.querySelector(".modal-backdrop").remove();
}

async function handleEditFormSubmit(event, userId) {
  event.preventDefault();
  try {
    const updatedUser = getUserFormData();
    await updateUser(userId, updatedUser);
    closeEditModal();
    await renderData();
    console.log("User updated successfully.");
  } catch (err) {
    console.error("Error updating user:", err);
  }
}

// Attach event listener to form for edit (dynamic)
function attachEditFormListener(userId) {
  const form = document.getElementById("employeeForm");
  form.onsubmit = (event) => handleEditFormSubmit(event, userId);
}

// When user clicks "Edit" button
function editUser(userId) {
  fetch(`${API_URL_USER}/${userId}`)
    .then((response) => response.json())
    .then((user) => {
      fillEditForm(user);
      attachEditFormListener(userId);
    })
    .catch((err) => console.error("Error fetching user data:", err));
}
/////////////////
