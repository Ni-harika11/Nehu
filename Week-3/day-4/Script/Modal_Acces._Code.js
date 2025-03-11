///Modal Access data and store in file
const API_URL = "http://localhost:3000";
const API_URL_USER = `${API_URL}/users`;


///Get form Elemets
function getEmployeeFormData(){
    return{
        fname:document.getElementById('fname').value.trim(),
        lname: document.getElementById("lname").value.trim(),
        email: document.getElementById("email").value.trim(),
        address: document.getElementById("address").value.trim(),
        password: document.getElementById("password").value.trim(),
        role: document.getElementById("role").value,
        phone: document.getElementById("phone").value.trim(),
        website: document.getElementById("website").value.trim(),
        company: document.getElementById("company").value.trim(),
    };
    }
//Validations from data
function validateEmployeeForm(data){
    if(!data.fname || !data.lname || !data.email || !data.address || !data.iredpassword || !data.phone || !data.company){
        alert("All files are required")
        return false
    }
    if(!/^[6-9]\d{9}$/.test(data.phone)) {
        alert("Invalid phone number!");
        return false;
      }
      return true;
}

//Save data to API
async function saveEmployeeData(data) {
    try{
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          if (!response.ok) {
            throw new Error("Failed to save employee data");
          }
          alert("Employee added successfully!");
          window.location.reload();
    }catch(error){
        console.log(error.mesage)
    }
    
}

////////
document.getElementById("employeeForm").addEventListener("submit",async function  (e) {
    e.preventDefault();
    const formData = getEmployeeFormData();
    if (validateEmployeeForm(formData)) {
      await saveEmployeeData(formData);
    }
    
})