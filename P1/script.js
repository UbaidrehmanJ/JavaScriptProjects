const container = document.querySelector("container");
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");



function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector("small");
    small.innerText = message;

}




function checkRequired(input) {
    if (input.value =="") {
        showError(input, `${getFieldId(input)} is required`);
    }
    else {
        showSuccess(input)
    }
}
function checkLength(input, min, max) {
    if ((input.value.length > min) && (input.value.length < max)) {
        showSuccess(input);
    }
    else {
        showError(input, `${getFieldId(input)} needs to be atleast ${min} and ${max} characters`);
    }

}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(input.value.trim()) ) {
        showSuccess(input);
    } else {
        showError(input, `Please provide a valid email`)
    }
}
function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `${input2.id} don't match`)
    }
}

function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1).toLowerCase();
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    
    checkRequired(username);
    checkRequired(email);
    checkRequired(password);
    checkRequired(cpassword);
    checkLength(username, 3, 12);
    checkLength(password, 3, 9);
    checkEmail(email);
    passwordMatch(password, cpassword);
})