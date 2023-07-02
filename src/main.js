'use strict';
import PopUp from './popup.js';
import Field from './field.js';

const CLAM_COUNT = 10;
const CRAB_COUNT = 10;
const GAME_DURATION_SEC = 60;

field.addEventListener('click', onFieldClick);
const gameBtn = document.querySelector('.game__btn');
const gameScore = document.querySelector('.game__score');



let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(()=> {
    startGame();
});

const field = new Field(CLAM_COUNT, CRAB_COUNT);
gameField.setClickListener(onItemClick);

gameBtn.addEventListener('click', () => {
    if(started) {
        stopGame();
    } else {
        startGame();
    }
});

function stopGame() {
    started = false;
    stopGameTimer();
    hideGameButton();
    gameFinishBanner.showWithText('Replay?');
}

function stopGameTimer() {
    clearInterval(timer);
}

function hideGameButton() {
    gameBtn.style.visibility = 'hidden';
}

function startGame() {
    started = true;
    init();
    showStopButton();
    showTimerAndScore();
    startGameTimer();
}

function init () {
    score = 0;
    gameScore.innerText = CLAM_COUNT;
    gameField.init();
}

function onFieldClick(event) {
    console.log(event);
    if(!started) {
        return;
    }
    if (item === 'clam') {
        score++;
        updateScoreBoard();
        if (score === CLAM_COUNT) {
            finishGame(true);
        }
        else if (item === 'crab') {
            finishGame(false);
        }
    }
}

function updateScoreBoard() {
    gameScore.innerText = CLAM_COUNT - score;
}

function finishGame(win) {
    started = false;
    hideGameButton();
    stopGameTimer();
    gameFinishBanner.showWithText(win? 'You won !!!' : 'You Lost ...');
}

function showStopButton() {
    const icon = gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    gameBtn.style.visibility = 'visible';
}

function showTimerAndScore () {
    gameTimer.style.visibility = 'visible'
    gameScore.style.visibility = 'visible'
}

const gameTimer = document.querySelector('.game__timer');
function startGameTimer () {
    let remainingTimeSec = GAME_DURATION_SEC;
    updateTimerText(remainingTimeSec);
    timer = setInterval(() => {
        if(remainingTimeSec <= 0) {
            clearInterval(timer);
            finishGame(CLAM_COUNT === score);
            return;
        }
        updateTimerText(--remainingTimeSec);
    }, 1000);
}

function updateTimerText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    gameTimer.innerText = `${minutes}:${seconds}`;
}







