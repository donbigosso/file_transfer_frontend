export function createForm(){
const modalBody = document.querySelector('.modal-body');
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

export function createFormWithUsernameField(){
createForm();
createLoginField();
}   