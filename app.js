import { getSetting, fetchAPIdata, fetchAPIdataWGetParams } from "./functions/CoreFunctions.js";
import { onClick } from "./functions/EventFunctions.js";
import { hideModal, showModal, scrollToDown, changeButtonText } from "./functions/PageAppearance.js";
import {modalClicks, showLoginModal} from "./functions/ModalFunctions.js";
import { performTests } from "./functions/TestFunctions.js";
import { initializeTableSorting,  } from "./functions/TableFunctions.js";



document.addEventListener('DOMContentLoaded', () => {


const loginButton = document.querySelector("#login-btn");
const logoutButton = document.querySelector("#logout-btn");





onClick(loginButton, () => {
  console.log("Login button clicked!");
  //showLoggedOnly();
  //hideUnloggedOnly();
  showLoginModal();
  });








initializeTableSorting();
performTests();





});