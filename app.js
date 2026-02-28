
import { onClick } from "./functions/EventFunctions.js";
import { initializeTableSorting,  addFileListToTable, initializeTableButtons  } from "./functions/TableFunctions.js";
import { showLoginModal } from "./functions/NewModalMethods.js";
import { getFileList } from "./functions/RequestFunctions.js";
import { performTests } from "./functions/TestFunctions.js";
import { handleAutoLogin, handleLogout } from "./functions/LoginFunctions.js";
import {deleteCookie} from "./functions/CookieFunctions.js";



document.addEventListener('DOMContentLoaded', () => {

(async () => {
  addFileListToTable(await getFileList());
})()

const loginButton = document.querySelector("#login-btn");
const logoutButton = document.querySelector("#logout-btn");



onClick(loginButton, () => {
  showLoginModal();
  });

  onClick(logoutButton, async() => {
    handleLogout();

  });



initializeTableSorting();
initializeTableButtons();
performTests();
handleAutoLogin();






});