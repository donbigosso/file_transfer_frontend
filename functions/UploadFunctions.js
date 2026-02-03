import { show, hide, changeInnerTextContent} from "./PageAppearance.js";    
const uploadAlertField = document.getElementById('upload-alert-field');
const selectedList = document.getElementById('selected-file-list');
const fileInput = document.getElementById("file-upload");
const uploadForm = document.getElementById("upload-form");
    
    if (uploadForm) {
        uploadForm.addEventListener("submit", uploadFile);
        fileInput.addEventListener("change",showFileList);

    }

export function uploadFile(e) {
    e.preventDefault();
   const amountVerif = verifyFileAmount();
    
}

function returnFileList(){
    
    const fileList = fileInput.files;
    return fileList;
}
function hideAlertsAndList(){
    hide(uploadAlertField);
    hide(selectedList);
    
}

function showFileList(){
    hideAlertsAndList();
    if(verifyFileAmount()){
        const fileList = returnFileList();
        const listLength = fileList.length;
       
        show(selectedList, 'block');
        
        const listText ='';
        const nameArray = [];
         for(let i = 0; i < listLength; i++){
            nameArray.push(fileList[i].name);
        }
        const stringList = nameArray.join(', ');
            
        changeInnerTextContent(selectedList, "Following files were selected: " + stringList+".");

    }
    console.log("DEB543 show file list");

}

function verifyFileAmount(){
    const fileList = returnFileList();
    const listLength = fileList.length;
    if(listLength === 0){
        console.warn("WRN231 No files were selected.");
        show(uploadAlertField, 'block');
        changeInnerTextContent(uploadAlertField,"No files selected. Please select at least one file");
        return false;
    }
    if(listLength > 5){
        console.warn("WRN232 Too many files were selected.");
        show(uploadAlertField, 'block');
        changeInnerTextContent(uploadAlertField,"Too many files selected. Please select up to 5 files.");
        return false;
    
    }
    console.log("DEB5623 Correct amount selected");
    hideAlertsAndList();
    return true;

}