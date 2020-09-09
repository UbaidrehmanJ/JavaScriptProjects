const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp= document.getElementById("timestamp");
const select = document.getElementById("select");
let trailer = ["https://www.youtube.com/embed/2QKg5SZ_35I", "https://www.youtube.com/embed/7TavVZMewpY", "https://www.youtube.com/embed/6SwYgdOnEkI", "https://www.youtube.com/embed/SHb18f-qHSQ"]


//Event Listeners --- click to play or pause video

video.addEventListener("click", togglevideo);

//function for above event listener

function togglevideo() {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}

//Event listener and its function--- change the icon 

video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);


function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    }
    else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }
}

//Event Listener and function--- to stop the video
play.addEventListener("click", togglevideo);
stop.addEventListener('click', stopVideo);


function stopVideo() {
    video.pause();
    video.currentTime = 0;
}


// Event Listener and   function --- to update the progress
video.addEventListener("timeupdate", updateProgress);

function updateProgress() {
    progress.value = video.currentTime / video.duration * 100;

    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    // Rounding down the seconds
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    
    // Display Timestamp
    timestamp.innerHTML = `${minutes}:${seconds}`;
}


//Event Listener and its function --- to set the progress
progress.addEventListener("change", setProgress);

function setProgress() {
    video.currentTime = progress.value * video.duration / 100;
}

//Event Listener and its function --- to change the video in player

select.addEventListener("change", change);

function change() {
    if (select.value == 0) {
        video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/2QKg5SZ_35I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    else if (select.value == 1) {
        video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/7TavVZMewpY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
    else if (select.value == 2) {
        video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/6SwYgdOnEkI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';     
    }
    else {
        video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SHb18f-qHSQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
}