const confirmed = document.getElementById("confirmed");
const recovered = document.getElementById("recovered");
const deaths = document.getElementById("death");
const cDate = document.getElementById("c-date");
const rDate = document.getElementById("r-date");
const dDate = document.getElementById("d-date");

const countries = document.getElementById("countries");
const selectedCountry = countries.value;
console.log(selectedCountry);
const cByCountry = document.getElementById("c-by-country");
const rByCountry = document.getElementById("r-by-country");
const dByCountry = document.getElementById("d-by-country");

const cDateByCountry = document.getElementById("c-by-date-c");
const rDateByCountry = document.getElementById("r-by-date-c");
const dDateByCountry = document.getElementById("d-by-date-c");


function getData() {
    fetch("https://covid19.mathdro.id/api")
        .then( res => res.json())
        .then( data => {
            console.log(data);
            console.log(data.lastUpdate.slice(0, 19));
            confirmed.innerHTML = `${data.confirmed.value}`;
            recovered.innerHTML = `${data.recovered.value}`;
            deaths.innerHTML = `${data.deaths.value}`
            cDate.innerHTML = `${data.lastUpdate.slice(0,10)}`;
            rDate.innerHTML = `${data.lastUpdate.slice(0,10)}`;
            dDate.innerHTML = `${data.lastUpdate.slice(0,10)}`
        })
}

function getDataByCountry() {
    const selectedCountry = countries.value;
    console.log(selectedCountry);
    fetch(`https://covid19.mathdro.id/api/countries/${selectedCountry}`)
        .then( res => res.json())
        .then( data => {
            console.log(data);
            cByCountry.innerHTML = `${data.confirmed.value}`;
            rByCountry.innerHTML = `${data.recovered.value}`;
            dByCountry.innerHTML = `${data.deaths.value}`;
            cDateByCountry.innerHTML = `${data.lastUpdate.slice(0,10)}`;
            rDateByCountry.innerHTML = `${data.lastUpdate.slice(0,10)}`;
            dDateByCountry.innerHTML = `${data.lastUpdate.slice(0,10)}`

        })

}
getDataByCountry();
getData();
countries.addEventListener("change", getDataByCountry);