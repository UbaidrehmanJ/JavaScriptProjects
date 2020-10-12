const addUser = document.getElementById("add-user");
const doubleMoney = document.getElementById("double-money");
const showMillionaire = document.getElementById("show-millionare");
const sort = document.getElementById("sort");
const claculateWealth = document.getElementById("calculate-wealth");
const main = document.getElementById("main");

let data = [];

generateRandomUser();
generateRandomUser();
generateRandomUser();

async function generateRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    let user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}` ,
        worth: Math.round(Math.random() * 1000000)
    }

    addData(newUser);

    //updateDom();
}

function addData(newUser) {
    data.push(newUser);

    updateDom();
}

function doubleWorth() {
    data = data.map( (item) => {
        return { ...item, worth: item.worth * 2}

    });
    updateDom();
}

function Millionaire() {
    data = data.filter( (item) => 
        item.worth > 1000000 
    );
    updateDom();
}

function sortByRihest() {
    data.sort( (a, b) => 
    b.worth - a.worth
    );
    updateDom();
}

function totalWealth() {
    const totalWorth = data.reduce(
        (acc, item) => (acc += item.worth), 0
    );

    const totalNetWorthElement = document.createElement('div');
    totalNetWorthElement.innerHTML = `<h3>Total Net Worth: <strong>${formatCurrency(totalWorth)}</strong></h3>`;
    main.appendChild(totalNetWorthElement);
}

function updateDom(inputData = data) {
    main.innerHTML = '<h2><strong>Name</strong> Net Worth</h2>';
    
    data.forEach( (item) => {
        const element = document.createElement('div');
        element.classList.add("name");
        element.innerHTML = `<strong>${item.name} </strong> ${formatCurrency(item.worth)}`;
        
        main.appendChild(element);

    });
}

function formatCurrency(num) {
    return 'PKR ' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


addUser.addEventListener("click", generateRandomUser);
doubleMoney.addEventListener("click", doubleWorth);
showMillionaire.addEventListener("click", Millionaire);
sort.addEventListener("click", sortByRihest);
claculateWealth.addEventListener("click", totalWealth)