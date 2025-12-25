import { hideModal, showModal, scrollToDown, changeButtonText } from "./PageAppearance.js";
import { addRowToTable } from "./CustomFunctions.js";
import { onClick } from "./EventFunctions.js";
import { checkHTMLInstance, getSetting, getUrlParam, fetchAPIdataWGetParams} from "./CoreFunctions.js";
 

export async function testAPI_GET(params) {
  const apiUrl = await getSetting("api_address");
       const apiResponse = await fetchAPIdataWGetParams(params);
    console.log("API Response:", apiResponse);
}

export function changeTestResultText(text){
    const testField = document.querySelector('.test-results');
    testField.textContent = text;
}


export function performTests(){
  
    const testButton = document.querySelector("#testBtn");
    const testButton2 = document.querySelector("#testBtn2");
    changeButtonText(testButton, "Test API GET");
    changeButtonText(testButton2, "Test button 2");
    checkHTMLInstance("dupa");
    onClick(testButton2, () => {
  console.log("Test button 2 clicked!");
 
    });

    onClick(testButton, () => {
      testAPI_GET({ request: "list_users" });
       
    });
}