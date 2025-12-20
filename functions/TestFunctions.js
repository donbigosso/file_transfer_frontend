import { changeButtonText } from "./PageAppearance.js";

export function changeTestResultText(text){
    const testField = document.querySelector('.test-results');
    testField.textContent = text;
}

export function performTests(){
    const testButton = document.querySelector("#testBtn");
    const testButton2 = document.querySelector("#testBtn2");
    changeButtonText(testButton, "Add row");
    changeButtonText(testButton2, "Show Modal");
}