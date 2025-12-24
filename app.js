import { getSetting, fetchAPIdata, fetchAPIdataWGetParams } from "./functions/CoreFunctions.js";
import { onClick } from "./functions/EventFunctions.js";
import { showLoggedOnly,hideLoggedOnly, addRowToTable, deleteRow, hideUnloggedOnly, showUnloggedOnly  } from "./functions/CustomFunctions.js";
import { hideModal, showModal, scrollToDown, changeButtonText } from "./functions/PageAppearance.js";
import {modalClicks, createFormWithUsrPassField} from "./functions/ModalFunctions.js";
import { performTests } from "./functions/TestFunctions.js";
import { initializeTableSorting,  } from "./functions/TableFunctions.js";



document.addEventListener('DOMContentLoaded', () => {


const loginButton = document.querySelector("#login-btn");
const logoutButton = document.querySelector("#logout-btn");

const modalPositiveButton = document.querySelector("#modal-btn-2");



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



onClick(modalPositiveButton, () => {
  console.log("Modal positive button clicked!");
  createFormWithUsrPassField();
  });


initializeTableSorting();
performTests();
modalClicks();



});