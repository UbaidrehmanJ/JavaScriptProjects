const balance = document.getElementById("balance");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const deleteBtn = document.getElementById('delete-btn');
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const btn = document.getElementById("btn");

const dummyTransactions = [
    {id: 1, description: "salary", amount: +150000},
    {id: 2, description: "Electric Bills", amount: -10000},
    {id:3, description: "Profit", amount: +25000},
    {id: 4, description: "miscellenous bills", amount: -60000}
];

let transactions = dummyTransactions;

function generateID() {
    return Math.floor(Math.random() * 10000000)
}
/*
function addTransaction(e) {
    e.preventDefault();

    if( description.value.trim() === '' || amount.value.trim() === '' ) {
        alert('Please enter a valid description and transaction amount.')
    } else {
        const transaction = {
            id: generateID(),
            description: description.value,
            amount: +amount.value
            };
        
        transactions.push(transaction);

        addTransactionUI(transaction);
        updateSums();

        description.value = '';
        amount.value = '';
    }
}

*/
function addTransaction(e) {
    e.preventDefault();

    if (description.value.trim() === '' || (amount.value.trim() === "")) {
        alert("Please enter valid value")
    } else {
        const transaction = {
            id: generateID(),
            description: description.value,
            amount: +amount.value
        };
    transactions.push(transaction);

    addTransactionUI(transaction);
    updateSums();

    description.value = " ";
    amount.value = " ";

        
    }

    
}


function addTransactionUI(transactions) {
    const type = transactions.amount > 0 ? '+' : '-';

    const item = document.createElement("li");
    item.classList.add( transactions.amount > 0 ? "plus" : "minus");
    item.innerHTML = ` 
        ${transactions.description}
        <span>${type} ${Math.abs(transactions.amount)}</span>
        <button class="delete-btn">X</button>
    `;

    list.appendChild(item);

}

// Function to Remove a Transaction
/*function deleteTransaction(id) {
    transactions = transactions.filter( transaction => transaction.id != id );
    init();
}*/

function updateSums() {
    const amount = transactions.map( transaction => transaction.amount );
    const total = amount.reduce( (acc, item) => (
        acc += item
    ), 0)
    .toFixed(2);


    
    const totalIncome = amount.filter( item => item > 0
    )
    .reduce( (acc, item) => (
        acc += item
    ), 0)
    .toFixed(2);

    
    const totalExpense = amount.filter( item => item < 0
    )
    .reduce( (acc, item) => (
        acc += item
    ), 0)
    .toFixed(2);
    


    balance.innerText = ` ${total}`;
    moneyPlus.innerText = `${totalIncome}`;
    moneyMinus.innerText = `${totalExpense}`;

}

function init() {
    transactions.forEach(addTransactionUI);

    updateSums();

}

form.addEventListener('submit', addTransaction);

init();