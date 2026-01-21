import { showLoggedOnly, hideUnloggedOnly } from "./PageAppearance.js"; 
import { hideModal } from "./PageAppearance.js"; 
import {verifyUserByPassword }from "./CoreFunctions.js";


export async function handleLogIn(){
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const errorField = document.getElementById('modal-alert-field');
    const frontednValidation = await validateLoginAndPassFrontend();
    const showError = function(){
        errorField.style.display = "block";
        errorField.innerText = "Invalid credentials";
    }
    if(frontednValidation){
        
        const apiValidation = await validateLoginAndPassAPI(username, password);
        const validationStatus = apiValidation.data.password_verification;
        console.log("API creds validated DEB762", apiValidation, " validation status: ", validationStatus);
        if(!validationStatus){
            showError();
            return;
        }
    }
    else {
       showError();
        return;
    }
    showLoggedOnly();
    hideUnloggedOnly();
    hideModal("my_modal");
}

export async function validateLoginAndPassFrontend(){
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const passRegex = /^(?=.*[A-Z])(?=.*\d).{10,}$/;
    const usrNameRegex = /^[a-zA-Z0-9_]{4,16}$/;
    const isPassValid = passRegex.test(password);
    const isUsrNameValid = usrNameRegex.test(username);
    if(isPassValid && isUsrNameValid){
       console.log("DEB7575 test");
         return true;
    }
    else {
        
        return false;
    }
    
   
}

export async function validateLoginAndPassAPI(username, password){
    
    const passwordVerification = await verifyUserByPassword(username, password);
    
    return passwordVerification;


}