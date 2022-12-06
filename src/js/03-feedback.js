import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const massegValue = localStorage.getItem(STORAGE_KEY);
const parseValue = JSON.parse(massegValue);

const formData = {};

form.addEventListener('input', throttle(getValue,500));
function getValue(e){
    formData[e.target.name]= e.target.value;
    localStorage.setItem(STORAGE_KEY,JSON.stringify(formData))
}

savedMassage()
function savedMassage(){
    const inputEl = document.querySelector('input');
    const textArrEl = document.querySelector('textarea');
    if(massegValue){
        inputEl.value = parseValue.email;
        textArrEl.value =  parseValue.message;
    }
}

form.addEventListener('submit', processingForm);
function processingForm(e){
    e.preventDefault();
    console.log(parseValue)
    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
}  
 