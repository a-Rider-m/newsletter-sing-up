const signContainer = document.querySelector('.sign-up-container');
const successContainer = document.querySelector('.success-container');

const form = document.querySelector('.sign-up-container__input');

const subsButton = document.querySelector('.main-button');
const dismissButton = document.querySelector('.dismiss-button');

const inputEmail = document.querySelector("#email-input");
const errorPara = document.querySelector('.sign-up-container__error-text');


subsButton.addEventListener('click', validateEmail);
dismissButton.addEventListener('click', () => {
    document.location.reload();
});

const expressions = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

function validateEmail() {
    let input = inputEmail.value;
    let expression = expressions.email;

    if (input == "") {
        inputEmail.classList.add('error-state');
        errorPara.innerText = "Can't be blank";
    }
    else if(!input.value == "") {
        inputEmail.classList.add('error-state');
        errorPara.innerText = "";
    }
    else if(!expression.test(input)){
        inputEmail.classList.add('error-state');
        errorPara.innerText = "Valid email required"
    } 
    else if(expression.test(input)) {
        inputEmail.classList.remove('error-state');
        errorPara.innerText = "";
    }
}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    let formValido = true;

    if(!inputEmail.value) {
        formValido = false;
       
    } else if (inputEmail.classList.contains('error-state')) {
        formValido = false;
    };

    if(!formValido) {
        return;
    }else {
        submitSuccess()
    }
});  

function submitSuccess() {
    const isFormInactive = signContainer.classList.contains('inactive');

    if (!isFormInactive) {
        signContainer.classList.add('inactive');
        successContainer.classList.toggle('inactive');
    }
}