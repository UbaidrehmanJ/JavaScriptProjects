const city = document.getElementById("location");
const temp = document.getElementById("temp");
const time = document.getElementById("time");
const date = document.getElementById("date");
const observationTime = document.getElementById("o-time");
const image = document.getElementById("image");
const selectCity = document.getElementById("cities");


function getData() {
    const selectedCity = selectCity.value;
    fetch(`http://api.weatherstack.com/current?access_key=c6e3c17c36517ecaa8c8e016ce368181&query=${selectedCity}`)
        .then( res => res.json())
        .then( data => {
            console.log(data);
            observationTime.innerHTML = `Updated at ${data.current.observation_time}`
            city.innerHTML = `${selectedCity} / ${data.location.country}`;
            temp.innerHTML = `${data.current.temperature} <sup>o</sup>`;
            const dateTime = data.location.localtime;
            const cTime = dateTime.slice(11,)
            time.innerText = `${cTime}`;
            const cDate = `${dateTime.slice(8,10)}-${dateTime.slice(5,7)}-${dateTime.slice(0,4)}`
            date.innerText = `${cDate}`;
            const temperature = data.current.temperature;
            if (temperature <= 25) {
                image.innerHTML = `<img src="blue-sky-icon-vector-12209947.jpg" alt="icon" class="icon" width="100px" height="100px"/>`;
            } else {
                image.innerHTML = `<img src="images.png" alt="icon" class="icon" width="100px" height="100px"/>`;
            }
        })
}

getData();

selectCity.addEventListener("change", getData);