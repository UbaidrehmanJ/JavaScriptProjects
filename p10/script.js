const settingBtn = document.getElementById("setting-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("setting-form");
const settingDifficulty = document.getElementById("difficulty");
const word = document.getElementById("word");
const text = document.getElementById("text");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const endGameContainer = document.getElementById("end-game-container");

let randomWord;

let time = 15;
let score = 0;
text.focus();


const wordList = ['a',
'ability',
'able',
'about',
'above',
'accept',
'according',
'account',
'across',
'act',
'action',
'activity',
'actually',
'add',
'address',
'administration',
'admit',
'adult',
'affect',]

//function to generate random words from word list
function generateWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
    console.log(randomWord);
}

//function to display word
function addWordToDom() {
    randomWord = generateWord();
    word.innerHTML = randomWord;
}

addWordToDom();

//function to update Score
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
    //return score;    
}

const timeInterval = setInterval(updateTime, 1000)
function updateTime() {
    time--;
    timeEl.innerHTML = `${time}s`;

    if ( time === 0) {
        clearInterval(timeInterval)
    }


}

//add text to dom
//function addToDom() {
//  score = updateScore();
//  scoreEl.innerHTML = score;
//}


//Event Listener to check
text.addEventListener("input", (e) => {
    const typeText = e.target.value;

    if (typeText === randomWord) {
        addWordToDom();
        e.target.value = ""  
        
        updateScore();
    }
})

