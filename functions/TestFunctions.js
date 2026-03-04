import {  changeButtonText, showModal } from "./PageAppearance.js";
import { onClick } from "./EventFunctions.js";
import { showRenameModal } from "./NewModalMethods.js";
import {requestRenameFile} from "./RequestFunctions.js";




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
    changeButtonText(testButton, "Test modal");
    changeButtonText(testButton2, "Test rename");

    onClick(testButton, async () => {
      showRenameModal("test_file.jpg");
    });
      onClick(testButton2, async () => {
 // const test_response = await verifyUserByPassword("bisssgos","Budwajzer@13");
 //    const test_response= await POSTJSONRequest({request: "create_user",name:"szymon644", password:"maskarada"});
const test_response= await requestRenameFile("test_file.jpg", "test_file2.jpg", "dgndyta3t3iu3su39p5ni");
//const test_response= await POSTJSONRequest({request: "set_user_token",name:"bigos", token:"supertoken1234"});
      console.log(test_response);
       
    }); 


    
}