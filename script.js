const form = document.getElementById('formulario');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const message = document.querySelector("#message")

const firstNameInput = document.querySelector("#firstName")
const lastNameInput = document.querySelector("#lastName")

const labelFirstName = document.querySelector("#labelFName")
const labelLastName = document.querySelector("#labelLName")
const labelEmail = document.querySelector("#labelEmail")
const labelMessage = document.querySelector("#labelMessage")

const validFirstName = false
const validLastName = false
const validEmail = false
const validMessage = false
const validButton = document.querySelector("#register")

firstNameInput.addEventListener("keypress", function(e){
    if(!checkChar(e)){
        e.preventDefault();
        labelFirstName.setAttribute('style', 'color: red')
        labelFirstName.innerHTML = 'First Name  **Numbers and special chars not allowed'
        validFirstName = false
    }else{
        labelFirstName.setAttribute('style', 'color: green')
        labelFirstName.innerHTML = 'First Name'
        validFirstName = true
    }
});

lastNameInput.addEventListener("keypress", function(e){
    if(!checkChar(e)){
        e.preventDefault();
        labelLastName.setAttribute('style', 'color: red')
        labelLastName.innerHTML = 'Last Name  **Numbers and special chars not allowed'
        validLastName = false
    }else{
        labelLastName.setAttribute('style', 'color: green')
        labelLastName.innerHTML = 'Last Name'
        validLastName = true
    }
});

function emailValidate(){
    if(emailRegex.test(email.value)){
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email Address'
        validEmail = true
    }else{
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Email Address **Enter a valid email'
        validEmail = false
    }
}

message.addEventListener('keyup', () =>{
    if(message.value.length<=10){
        labelMessage.setAttribute('style', 'color: red')
        labelMessage.innerHTML = 'Message  **Enter at least 10 characters'
        validMessage = false
    }else{
        labelMessage.setAttribute('style', 'color: green')
        labelMessage.innerHTML = 'Message'
        validMessage = true
    }
});

function checkChar(e){
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-zA-Z]';
    if(char.match(pattern)){
        return true;
    }
}