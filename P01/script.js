const form = document.getElementById('form');
const username = document.getElementById('username');
const email  = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


//function to showError
function showError(input, message) {
    console.log(input);
    const formControl = input.parentElement;
    //console.log(formControl);
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//function to show Success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}




function checkRequired(input) {
    if ( input.value == "") {
        showError(input, `${getFieldId(input)} is required`);
    }
    else {
        showSuccess(input);
    }
}
/*
//Function to check required elements
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        console.log(showError(input.id, "username is required"));
        if (input.value === "") {
            
            showError(input, `${getFieldId(input)} is required`)
        }
        else {
            showSuccess(input);
        }
    });
*/


function checkLength(input, min, max) {
    if (( input.value.length > min ) && ( input.value.length < max )) {
        showSuccess(input);
    }
    else {
        showError(input, `${getFieldId(input)} is not proper`);
    }
}


function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Password don't match");
    }
    else {
        showSuccess(input);
        
    }
}



function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    //checkRequired([username, email, password, cpassword]);
    
    checkRequired(username);
    checkRequired(email);
    checkRequired(password);
    checkRequired(cpassword);
    
    checkLength(username, 3, 9);
    checkLength(password, 3, 9);
    checkLength(cpassword, 3, 9);
    checkPassword(password, cpassword);
})