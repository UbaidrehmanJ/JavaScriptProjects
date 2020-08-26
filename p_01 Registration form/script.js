const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const fathername = document.getElementById("fathername");
const cnic = document.getElementById("cnic");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");

/*
console.log(username);
console.log(cnic);
console.log(email);

function showSuccess(input) {
    const formControl = input.paerntElement;
    formControl.className = 'form-control success';
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'; 
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function checkLength(input, min, max) {
    if (input.value.length > min && input.value.length < max) {
        showSuccess(input);
    }
   
    
    else {
        showError(input, `${getFieldId(input)} is not proper`);
    }

}

function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function(e) {
    e.preventDefault();


    checkLength(fullname, 5, 18);
    checkLength(fathername, 5, 18);
    checkLength(cnic, 1, 14);
    checkLength(username, 3, 9);
    checkLength(password, 3, 9);

})
*/

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'; 
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function checkRequired(input) {
    if (input.value === "") {
        showError(input, `${input.id} is required`);
    }
    else {
        showSuccess(input);
    }
}

function checkLength(input, min, max) {
    if (( input.value.length > min ) && ( input.value.length < max )) {
        showSuccess(input);
    }
    else {
        showError(input, `${getFieldId(input)} is not proper`);
    }
}

/*
function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Password don't match");
    }
    else {
        showSuccess(input);
        
    }
}

*/

function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}







form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired(username);  
    checkRequired(fullname);
    checkRequired(fathername);
    checkRequired(cnic);
    checkRequired(email);
    checkRequired(password); 

    checkLength(username, 3, 9);
    checkLength(fullname, 3, 9);
    checkLength(password, 3, 9);
    checkLength(fathername, 3, 9);
    checkLength(cnic, 3, 9);
    



/*
    if (fullname.value === "") {
        showError(fullname, "Fullname is not valid");
    }
    else {
        showSuccess(fullname);
    }

    if (fathername.value === "") {
        showError(fathername, "Fathername is not valid");
    }
    else {
        showSuccess(fathername);
    }

    if (username.value === "") {
        showError(username, "Username is not valid");
    }
    else {
        showSuccess(username);
    }
*/
    
})
