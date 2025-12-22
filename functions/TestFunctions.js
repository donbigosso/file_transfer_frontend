import { hideModal, showModal, scrollToDown, changeButtonText } from "./PageAppearance.js";
import { addRowToTable } from "./CustomFunctions.js";
import { onClick } from "./EventFunctions.js";
import { getUrlParam, buildURLWithParams} from "./CoreFunctions.js";
 

export function changeTestResultText(text){
    const testField = document.querySelector('.test-results');
    testField.textContent = text;
}

export function performTests(){
    const testButton = document.querySelector("#testBtn");
    const testButton2 = document.querySelector("#testBtn2");
    changeButtonText(testButton, "Change text");
    changeButtonText(testButton2, "Show Modal");
    
    onClick(testButton2, () => {
  console.log("Test button 2 clicked!");
  showModal("myModal");
    });

    onClick(testButton, () => {
      const URLWParams= buildURLWithParams("https://api.example.com/data", { search: "test", page: 2, tags: ["ai", "quantum"] });
      changeTestResultText(URLWParams);
      scrollToDown();
       
    });
}