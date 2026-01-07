import { showLoggedOnly, hideUnloggedOnly } from "./PageAppearance.js"; 
import { hideModal } from "./PageAppearance.js"; 


export function handleLogIn(){
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const errorField = document.getElementById('modal-alert-field');
    if(validate_login_and_password()){
    showLoggedOnly();
    hideUnloggedOnly();
    hideModal("my_modal");
    }
    else {
        errorField.style.display = "block";
        errorField.innerText = "Invalid credentials"
    }
}

export function validate_login_and_password(){
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const passRegex = /^(?=.*[A-Z])(?=.*\d).{10,}$/;
    const usrNameRegex = /^[a-zA-Z0-9_]{4,16}$/;
    const isPassValid = passRegex.test(password);
    const isUsrNameValid = usrNameRegex.test(username);
    if(isPassValid && isUsrNameValid){
         return true;
    }
    else {
        
        return false;
    }
    
   
}