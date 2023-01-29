

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

let formData = {};

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  formData = data;
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  email.value = data.email || '';
  message.value = data.message || '';
}

dataFromLocalStorage();