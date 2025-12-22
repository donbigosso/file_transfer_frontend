import { getSetting, fetchAPIdata, fetchAPIdataWGetParams } from "./functions/CoreFunctions.js";
import { onClick } from "./functions/EventFunctions.js";
import { showLoggedOnly,hideLoggedOnly, addRowToTable, deleteRow, hideUnloggedOnly, showUnloggedOnly  } from "./functions/CustomFunctions.js";
import { hideModal, showModal, scrollToDown, changeButtonText } from "./functions/PageAppearance.js";
import {createFormWithUsernameField} from "./functions/ModalFunctions.js";
import { performTests } from "./functions/TestFunctions.js";
import { initializeTableSorting } from "./functions/TableFunctions.js";

(async () => {
  const apiUrl = await getSetting("api_address");
  console.log("api_address:", apiUrl);
  const apiResponse = await fetchAPIdataWGetParams();
  console.log("API Response:", apiResponse);
})();

document.addEventListener('DOMContentLoaded', () => {

const testButton = document.querySelector("#testBtn");
const testButton2 = document.querySelector("#testBtn2");
const loginButton = document.querySelector("#login-btn");
const logoutButton = document.querySelector("#logout-btn");
const modalCloseButton = document.querySelector("#modal-close-btn");
const modalPositiveButton = document.querySelector("#modal-btn-positive");



onClick(loginButton, () => {
  console.log("Login button clicked!");
  showLoggedOnly();
  hideUnloggedOnly();
  });

onClick(logoutButton, () => {
  console.log("Logout button clicked!");
  hideLoggedOnly();
  showUnloggedOnly();
  });

onClick(modalCloseButton, () => {
  console.log("Modal close button clicked!");
  hideModal("myModal");
  });

onClick(modalPositiveButton, () => {
  console.log("Modal positive button clicked!");
  createFormWithUsernameField();
  });


initializeTableSorting();
performTests();




});