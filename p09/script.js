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

function addTransactionUI(transactions) {
    const type = transactions.amount > 0 ? '+' : '-';

    const item = document.createElement("li");
    item.classList.add( transactions.amount > 0 ? "plus" : "minus");
    item.innerHTML = ` 
        ${transactions.description}
        <span>${type} ${Math.abs(transactions.amount)}</span>
        <button class="delete-btn" id="delete-btn">X</button>
    `;

    list.appendChild(item);



}

function init() {
    transactions.forEach(addTransactionUI);

}

init();