const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp= document.getElementById("timestamp");


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

//Event listener --- change the icon 

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


play.addEventListener("click", togglevideo);
stop.addEventListener('click', stopVideo);


function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

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

progress.addEventListener("change", setProgress);

function setProgress() {
    video.currentTime = progress.value * video.duration / 100;
}