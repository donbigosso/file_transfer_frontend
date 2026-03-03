import { showRenameModal } from "./NewModalMethods.js";
import { verifySession } from "./RequestFunctions.js";
export async function handleFileRename(fileName){
   
    const sessionTest = await verifySession();
    
    if(!sessionTest){
        console.error("User must be logged in to rename a file.");
        return;
    }
 console.log("DEB 312 ", sessionTest);
  showRenameModal(fileName);
}

export async function executeFileRename(fileName){
    const newNameFormField= document.getElementById("rename-input");
    const newName = newNameFormField.value;
    const errorField = document.getElementById('modal-alert-field');
    errorField.style.display = "none";
    const filenameRegEx = /^[a-zA-Z0-9._\-\s]{5,50}$/;
    const newFilenameValid = filenameRegEx.test(newName);
    
    if(!newFilenameValid){
        errorField.textContent = "Filename must be between 5 and 50 characters long and contain only letters, numbers, dots, hyphens, underscores, and spaces.";
        errorField.style.display = "block";
        return;
    }
    console.log("DEB714, rename regEx result: ", newFilenameValid);
}
