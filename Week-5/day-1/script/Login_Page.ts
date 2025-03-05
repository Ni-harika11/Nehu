const API_URL: string = "http://localhost:3000";
const API_URL_USER: string = `${API_URL}/users`;

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById('loginFormElement') as HTMLFormElement;
  const userEmail = document.getElementById("login-email") as HTMLInputElement;
  const userPassword = document.getElementById("login-password") as HTMLInputElement;

  loginForm.addEventListener('submit', async (e: Event) => {
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

    await fetchDataFrom(userEmail.value.trim(), userPassword.value.trim());
  });
});

type User ={
  email: string;
  password: string;
  role: string;
  username: string;
}

function handleUserRole(user: User): void {
  if (user.role === "Admin" || user.role === "Super Admin") {
    window.location.href = "/Week-3/day-4/public/index.html";
  } else if (user.role === "Customer") {
    window.location.href = "/Week-3/day-4/public/customer.html";
    localStorage.setItem("username", user.username);
  }
}

async function fetchDataFrom(email: string, password: string): Promise<void> {
  try {
    const response = await fetch(`${API_URL_USER}?email=${email}&password=${password}`);
    const data: User[] = await response.json();
    
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
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

const employeeForm = document.getElementById("employeeForm") as HTMLFormElement;
employeeForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  handleFormSubmission();
});

type UserData= {
  fnam: string;
  lname: string;
  email: string;
  address: string;
  password: string;
  role: string;
  phone: string;
  website: string;
  company: string;
}

function getFormData(): UserData {
  return {
    fnam: (document.getElementById('fname') as HTMLInputElement).value.trim(),
    lname: (document.getElementById('lname') as HTMLInputElement).value.trim(),
    email: (document.getElementById('email') as HTMLInputElement).value.trim(),
    address: (document.getElementById('address') as HTMLInputElement).value.trim(),
    password: (document.getElementById('password') as HTMLInputElement).value.trim(),
    role: (document.getElementById('role') as HTMLSelectElement).value,
    phone: (document.getElementById('phone') as HTMLInputElement).value.trim(),
    website: (document.getElementById('website') as HTMLInputElement).value.trim(),
    company: (document.getElementById('company') as HTMLInputElement).value.trim(),
  };
}

function validateFormData(data: FormData): boolean {
  let isValid = true;

  if (!data.fnam) {
    document.getElementById("firstError")!.textContent = "First name is required";
    isValid = false;
  }
  if (!data.lname) {
    document.getElementById("lastError")!.textContent = "Last name is required";
    isValid = false;
  }
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(data.email)) {
    document.getElementById("emailError")!.textContent = "Invalid email format.";
    isValid = false;
  }
  const phonePattern = /^[6-9]\d{9}$/;
  if (!phonePattern.test(data.phone)) {
    document.getElementById("phoneError")!.textContent = "Invalid phone number.";
    isValid = false;
  }
  if (!data.password) {
    document.getElementById("passwordError")!.textContent = "Password is required";
    isValid = false;
  }

  return isValid;
}

async function addUser(data: FormData): Promise<void> {
  try {
    const response = await fetch(API_URL_USER, {
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
    ($('#addEmployeeModal') as any).modal('hide');
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  }
}

function handleFormSubmission(): void {
  const formData = getFormData();
  clearErrors();

  if (validateFormData(formData)) {
    addUser(formData);
  }
}

function clearErrors(): void {
  const errorIds = ['firstError', 'lastError', 'emailError', 'phoneError', 'passwordError'];
  errorIds.forEach(id => {
    document.getElementById(id)!.textContent = "";
  });
}
