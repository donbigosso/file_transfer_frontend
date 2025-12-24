import { changeButtonText, changeInnerTextContent, hideModal } from "./PageAppearance.js";    
import { onClick } from "./EventFunctions.js";
const modalBody = document.querySelector('.modal-body');
const modalCloseButton = document.querySelector("#modal-close-btn");



export function createForm(){
modalBody.innerHTML = '';  // clear old content
const form = document.createElement('form');
form.id = 'login-form';
modalBody.appendChild(form);
}



export function createLoginField(){
const form = document.querySelector('#login-form');
const div = document.createElement('div');
div.className = 'mb-3';

const label = document.createElement('label');
label.textContent = 'Username';
label.htmlFor = 'loginUsername';
label.className = 'form-label';

const input = document.createElement('input');
input.type = 'text';
input.className = 'form-control';
input.id = 'loginUsername';
input.placeholder = 'Enter username';
input.required = true;

div.appendChild(label);
div.appendChild(input);
form.appendChild(div);

}

export function createPasswordField(){
const form = document.querySelector('#login-form');

const div = document.createElement('div');
div.className = 'mb-3';

const label = document.createElement('label');
label.textContent = 'Password';
label.htmlFor = 'loginPassword';
label.className = 'form-label';

const input = document.createElement('input');
input.type = 'password';
input.className = 'form-control';
input.id = 'loginPassword';
input.placeholder = 'Enter password';
input.required = true;

div.appendChild(label);
div.appendChild(input);
form.appendChild(div);

}

export function createFormWithUsrPassField(){
createForm();
createLoginField();
createPasswordField();
}   

export function modalClicks(){
onClick(modalCloseButton, () => {
 console.log("Modal close button from functionclicked!");
  hideModal("myModal");
})
}