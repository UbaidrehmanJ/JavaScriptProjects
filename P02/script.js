const movieContainer = document.querySelector(".movie-container");
const movie = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const container = document.querySelector(".container");
const as = document.getElementById("as");
const os = document.getElementById("oc");
const ss = document.getElementById("ss");
let ticketPrice = +movie.value;
console.log(ticketPrice);
console.log(movie.value);

//let screenPic = ['auditorium-1.jpg','overview_hero.jpg','pic1.jpg','pic2.jpg']
let movieTrailor = ["https://www.youtube.com/embed/2QKg5SZ_35I",
"https://www.youtube.com/embed/7TavVZMewpY",
"https://www.youtube.com/embed/K0eDlFX9GMc",
"https://www.youtube.com/embed/FJ2Fm-4CR5k"]


function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const countSelectedSeats = selectedSeats.length;
    count.innerText = countSelectedSeats;
    total.innerText = countSelectedSeats * ticketPrice;
}

function updatess() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const countSelectedSeats = selectedSeats.length;
    ss.innerText = countSelectedSeats;
    
}

function updateas() {
    const availableSeats = document.querySelectorAll(".row .seat");
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const countSelectedSeats = selectedSeats.length;
    const countAvailableSeats = availableSeats.length;
    const occupiedSeats = document.querySelectorAll(".row .seat.occupied");
    const countOccupiedSeats = occupiedSeats.length;
    as.innerText = countAvailableSeats - (countSelectedSeats + countOccupiedSeats);
}
   

movie.addEventListener("click", (e) => {
    const screen = document.querySelector(".screen");
    ticketPrice = +e.target.value;
    if (ticketPrice === 20) {
        screen.innerHTML = `<iframe width="430" height="240" src='${movieTrailor[0]}' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    
    else if (ticketPrice === 15) {
        screen.innerHTML = `<iframe width="430" height="240" src='${movieTrailor[1]}' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    else if (ticketPrice === 12) {
        screen.innerHTML = `<iframe width="430" height="240" src='${movieTrailor[2]}' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    else  {
        screen.innerHTML = `<iframe width="430" height="240" src='${movieTrailor[3]}' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    
    
    updateSelectedCount();
})

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        updateSelectedCount();
        updatess();
        updateas();
    }
})