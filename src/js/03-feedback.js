import throttle from "lodash.throttle";


const formEl = document.querySelector('.feedback-form');

const refs = {
    email: document.querySelector('input'),
    message: document.querySelector('textarea')
}

console.log(refs)

const FEEDBACK_FORM = "feedback-form-state"

formEl.addEventListener('input', throttle(handleFormInput, 500)); 
formEl.addEventListener('submit', handlerFormSubmit);

let formData = {};

function handleFormInput(event){
    formData[event.target.name] = event.target.value;
    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
};

function handlerFormSubmit(event){
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(FEEDBACK_FORM)));
    localStorage.removeItem(FEEDBACK_FORM);
    formData = {};
    formEl.reset();
}

function populateTextarea(){
    let savedMassage = JSON.parse(localStorage.getItem(FEEDBACK_FORM)) || {};
    formData = savedMassage;
    refs.message.value = savedMassage.message || '' ;
    refs.email.value = savedMassage.email || '';
}
populateTextarea();