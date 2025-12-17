import { getSetting } from "./functions/CoreFunctions.js";
import { onClick } from "./functions/EventFunctions.js";
import { showLoggedOnly,hideLoggedOnly, addRowToTable, deleteRow, hideUnloggedOnly, showUnloggedOnly  } from "./functions/CustomFunctions.js";


(async () => {
  const apiUrl = await getSetting("api_address");
  console.log("api_address:", apiUrl);
})();

const testButton = document.querySelector("#testBtn");
const testButton2 = document.querySelector("#testBtn2");
const loginButton = document.querySelector("#login-btn");
const logoutButton = document.querySelector("#logout-btn");





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

onClick(testButton2, () => {
  console.log("Test button 2 clicked!");
  deleteRow(5);
});

onClick(testButton, () => {
  console.log("Test button clicked!");
  addRowToTable("example.txt", "15 KB", "2024-06-15");
});