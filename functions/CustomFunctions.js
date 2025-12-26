import { hide, show, showLoggedOnly, hideUnloggedOnly } from "./PageAppearance.js"; 
import { hideModal } from "./PageAppearance.js";    


export function handleLogIn(){
    showLoggedOnly();
    hideUnloggedOnly();
    hideModal("my_modal");
}