// Get elements
const loginTab = document.getElementById('loginTab') as HTMLButtonElement;
const signupTab = document.getElementById('signupTab') as HTMLButtonElement;
const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const signupForm = document.getElementById('signupForm') as HTMLFormElement;

// Event listeners for tab switching
loginTab.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
    loginTab.classList.add('border-blue-600');
    signupTab.classList.remove('border-blue-600');
});

signupTab.addEventListener('click', () => {
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    signupTab.classList.add('border-blue-600');
    loginTab.classList.remove('border-blue-600');
});
////Validations for Login pages
const button=document.getElementById("button")as HTMLButtonElement;
const loginemail=(document.getElementById("login-email")as HTMLInputElement).value.trim()
const loginpassword=(document.getElementById("login-password")as HTMLInputElement).value.trim();
const confirmpassword=(document.getElementById("confirm-password")as HTMLInputElement).value.trim();
button.addEventListener('click',async function (e:Event) {
    e.preventDefault();
    const emailError=(document.getElementById("emailError")as HTMLSpanElement);
    const passwordError=(document.getElementById("passwordError")as HTMLSpanElement);
    const confirmpasswordError=(document.getElementById("confirmpasswordError")as HTMLSpanElement);
    const emailPatr = /^[a-zA-Z0-9][a-zA-Z0-9._%+-]*@[a-zA-Z]+\.(com)$/;
    
    if(loginemail===""||loginpassword===""||confirmpassword===""){
        button.disabled=true;
        return ;
    }
    if(!emailPatr.test(loginemail)){
        emailError.innerHTML="PLese enter a valid email (e.g., example@domain.com)";
        loginemail.classList.add('border-red-500', 'shadow-lg', 'shadow-red-500/80');
    }

})