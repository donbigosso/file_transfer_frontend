import { showLoggedOnly, hideUnloggedOnly } from "./PageAppearance.js"; 
import { hideModal } from "./PageAppearance.js"; 
import {verifyUserByPassword, checkIfTokenExist}from "./CoreFunctions.js";
import {setUserToken} from "./RequestFunctions.js";
import  {setCookie} from "./CookieFunctions.js";


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




async function createSessionToken() { //from Grok
    while (true) {
        // Generate a reasonably long random token
        const token = 
            Math.random().toString(36).substring(2, 15) + 
            Math.random().toString(36).substring(2, 15);
        
        const tokenExistence = await checkIfTokenExist(token);
        
        console.log("DEB928 token:", token, "existence:", tokenExistence);

        if (!tokenExistence) {
            return token;           // ← found a free one → return it
        }

        // If we get here → token already exists → loop again
    }
}

export async function setSessionToken(days = 14, username){
    const token = await createSessionToken();
    setCookie("session_token", token, days);
   return  setUserToken(username, token, days);
   // return "DEB929 token for user " + username + " created: "+ token+" valid for: " +days +" days";
}