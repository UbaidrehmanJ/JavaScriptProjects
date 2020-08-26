const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


function showError(input, message) {
    const formControl = input.parentElement;
    console.log(formControl);
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

/*console.log(showSuccess(username));
console.log(showSuccess(password));
console.log(showError(username, "username is required"));
console.log(showError(password, "password is required"))
*/

function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if (input.value === "" ) {
            showError(input, `${getFieldId(input)} is required`);
        }
        else {
            showSuccess(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldId(input)} is not proper`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldId(input)} is not proper`);
    }
    else {
        showSuccess(input);
    }
}
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Password don't match")
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

function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}




form.addEventListener('submit', function(e) {
    e.preventDefault();
    

    checkRequired([username, email, password, cpassword]);
    checkLength(username, 3, 8);
    checkLength(password, 6, 30);
    checkEmail(email);
    checkPasswordMatch(password, cpassword);
    
})