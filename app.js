import { getSetting } from "./functions/CoreFunctions.js";
import { onClick } from "./functions/EventFunctions.js";
import { showLoggedOnly } from "./functions/CustomFunctions.js";
import { hideLoggedOnly } from "./functions/CustomFunctions.js";

(async () => {
  const apiUrl = await getSetting("api_address");
  console.log("api_address:", apiUrl);
})();

const testButton = document.querySelector("#testBtn");
const testButton2 = document.querySelector("#testBtn2");




onClick(testButton, () => {
  console.log("Test button clicked!");
  showLoggedOnly();
});

onClick(testButton2, () => {
  console.log("Test button 2 clicked!");
  hideLoggedOnly();
});