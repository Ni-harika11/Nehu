const API_User = `http://localhost:3000/user`;
// Get the form element
const signUpForm = document.getElementById("signUpForm") as HTMLFormElement;
signUpForm.addEventListener("submit", function (e: Event): void {
    e.preventDefault();
    handleFormSubmission();
});

// Define user data type
type UserFormData = {
    id?: string; // Optional id for json-server auto-generation
    fname: string;
    lname: string;
    email: string;
    password: string;
};

// Collect form data
function getFormData(): UserFormData {
    const fname = (document.getElementById('fname') as HTMLInputElement).value.trim();
    const lname = (document.getElementById('lname') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const password = (document.getElementById('password') as HTMLInputElement).value.trim();
    return { fname, lname, email, password };
}

// Validate form data
function validateFormData(data: UserFormData): boolean {
    let isValid = true;

    if (!data.fname) {
        const firstError = document.getElementById("firsterror");
        if (firstError) firstError.textContent = 'First name is required';
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
async function addUser(data: UserFormData) {
    try {
        const response = await fetch(API_User, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to add user');
        }

        alert("User added successfully");
        signUpForm.reset();
    } catch (error) {
        console.error(error);
        alert("An error occurred while adding the user.");
    }
}

// Handle form submission
function handleFormSubmission() {
    const formData = getFormData();
    if (validateFormData(formData)) {
        addUser(formData);
    }
}




 
 