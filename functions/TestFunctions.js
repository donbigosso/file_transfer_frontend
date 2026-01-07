import {  changeButtonText } from "./PageAppearance.js";
import {  deleteRow } from "./TableFunctions.js";
import { onClick } from "./EventFunctions.js";
import { getSetting , verifyUserByPassword, POSTJSONRequest } from "./CoreFunctions.js";
import {downloadFileFromAPI} from "./CustomFunctions.js";

import  {getFileList} from "./RequestFunctions.js";



export function changeTestResultText(text){
    const testField = document.querySelector('.test-results');
    testField.textContent = text;
}

export async function getMockFileList(){
  try {
    const mockFiles = await fetch('../junk/mock_file_data.json');
    if (!mockFiles.ok) {
      throw new Error(`HTTP error! status: ${mockFiles.status}`);
    }
    const fileList = await mockFiles.json();
    return fileList;
  }
  catch (error) {
    console.error("Error fetching mock file list:", error.message);
    return [];
  }
}


export function performTests(){
  
    const testButton = document.querySelector("#testBtn");
    const testButton2 = document.querySelector("#testBtn2");
    changeButtonText(testButton, "Delete row 5");
    changeButtonText(testButton2, "Test POST request");

    onClick(testButton, () => {
      deleteRow(5);
       
    });
      onClick(testButton2, async () => {
      const api_response = await verifyUserByPassword("bigos","password");
 //    const test_response= await POSTJSONRequest({request: "create_user",name:"szymon6", password:"maskarada"});
const test_response= await POSTJSONRequest({request: "verify_user_token",name:"bigos", token:"supertoken1234"});
//const test_response= await POSTJSONRequest({request: "set_user_token",name:"bigos", token:"supertoken1234"});
      console.log(test_response);

    }); 
    
}