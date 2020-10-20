const flipButton = document.getElementById("btn");
const rate = document.getElementById("rate");
const currOnePicker = document.getElementById("currency-one");
const currOneAmount = document.getElementById("rate-one");
const currTwoPicker = document.getElementById("currency-two");
const currTwoAmount = document.getElementById("rate-two");

function calculate() {

    const currOneCode = currOnePicker.value;
    const currTwoCode = currTwoPicker.value;
    fetch(`https://v6.exchangerate-api.com/v6/1475a05fedc5470f17a9a447/latest/${currOneCode}`)
    .then( (res) => res.json() )
    .then( (data) => {
    
        const exchangeRate = data.conversion_rates[currTwoCode];
        

        rate.innerText = `1 ${currOneCode} = ${exchangeRate} ${currTwoCode}`;

        currTwoAmount.value = (currOneAmount.value * exchangeRate).toFixed(2);
        
        
    });
}

function flip() {
    const temp = currOnePicker.value;
    currOnePicker.value = currTwoPicker.value;
    currTwoPicker.value = temp;
    calculate();
};

// Event Listeners
currOnePicker.addEventListener('change', calculate);
currTwoPicker.addEventListener('change', calculate);
currOneAmount.addEventListener('input', calculate);
currTwoAmount.addEventListener('input', calculate);
flipButton.addEventListener('click', flip);

calculate();