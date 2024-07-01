const form = document.getElementById('formulario');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const fields = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".validate-span");

const emailLoop = document.querySelector(".email-loop")

const validButton = document.querySelector("#register")

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const validFirstName = firstNameValidate();
    const validLastName = lastNameValidate();
    const validEmail = emailValidate();
    const validMessage = messageValidate();

    if (validFirstName && validLastName && validEmail && validMessage){
        const listLocal = JSON.parse(localStorage.getItem('listLocal') || '[]')
        listLocal.push({
            firstName: fields[0].value,
            lastName: fields[1].value,
            email: fields[2].value,
            message: fields[3].value
        }
        )

        localStorage.setItem('listLocal', JSON.stringify(listLocal))

        form.submit();
    }
});

function validateError(i){
    spans[i].style.display = 'block';
}

function validateApproved(i){
    spans[i].style.display = 'none';
}

fields[0].addEventListener("keypress", function(e){
    if(!checkChar(e)){
        e.preventDefault();
        validateError(0);
    }else{
        validateApproved(0);
    }
});

function firstNameValidate(){
    if (fields[0].value === "") {
        validateError(0);
        return false;
    } else {
        validateApproved(0);
        return true;
    }
}

fields[1].addEventListener("keypress", function(e){
    if(!checkChar(e)){
        e.preventDefault();
        validateError(1);
    }else{
        validateApproved(1);
    }
});

function lastNameValidate() {
    if (fields[1].value === "") {
        validateError(1);
        return false;
    } else {
        validateApproved(1);
        return true;
    }
}


function emailValidate(){
    if(emailRegex.test(fields[2].value)){
        validateApproved(2);
        return true;
    }else{
        validateError(2);
        return false;
    }
}

function messageValidate(){
        if(fields[3].value.length<10){
            validateError(3);
            return false;
        }else{
            validateApproved(3);
            return true;
        }
    
}

/*function emailLoopValidate(){
    if(emailRegex.test(emailLoop.value)){
        
    }else{
        fields[4].style.border = '2px solid #e63636';
    }
}*/

function checkChar(e){
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-zA-Z\\s]';
    if(char.match(pattern)){
        return true;
    }
}

function record(){
    let recordsList = document.getElementById('records-list');
    recordsList.innerHTML = '';

    let listLocal = JSON.parse(localStorage.getItem('listLocal')) || [];

    listLocal.forEach(item => {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>First Name:</strong> ${item.firstName}<br>
            <strong>Last Name:</strong> ${item.lastName}<br>
            <strong>Email:</strong> ${item.email}<br>
            <strong>Message:</strong> ${item.message}<br><br>
        `;
        recordsList.appendChild(listItem);
    });
}