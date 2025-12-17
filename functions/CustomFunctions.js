import { show } from "./PageAppearance.js"; 
import { hide } from "./PageAppearance.js";
export function showLoggedOnly(){
    const loggedIn = document.querySelectorAll(".logged-only");
    loggedIn.forEach(el => show(el));}

export function hideLoggedOnly(){
    const loggedIn = document.querySelectorAll(".logged-only");
    loggedIn.forEach(el => hide(el));                           
}   