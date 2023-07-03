'use strict';

import Field from './field.js';

export default class Game {
    constructor(gameDuration, clamCount, crabCount) {
        this.gameDuration = gameDuration;
        this.clamCount = clamCount;
        this.crabCount = crabCount;
        
        this.gameTimer = document.querySelector('.game__timer');
        this.gameBtn = document.querySelector('.game__btn');
        this.gameScore = document.querySelector('.game__score');

        this.gameBtn.addEventListener('click', () => {
            if(this.started) {
                this.stop();
            } else {
                this.start();
            }
        });

        this.gameField = new Field(clamCount, crabCount);
        this.gameField.setClickListener(this.onItemClick);

        this.started = false;
        this.score = 0;
        this.timer = undefined;
        
    }

    setGameStopListener(onGameStop) {
        this.onGameStop = onGameStop;
    }
    
    start() {
        this.started = true;
        this.init();
        this.showStopButton();
        this.showTimerAndScore();
        this.startGameTimer();
    }

    stop() {
        this.started = false;
        this.stopGameTimer();
        this.hideGameButton();
        this.onGameStop && this.onGameStop('cancel');
    }
    
    finish(win) {
        this.started = false;
        this.hideGameButton();
        this.stopGameTimer();
        this.onGameStop && this.onGameStop(win ? 'win' : 'lose');
    }
    

    onItemClick = (item) => {
        if(!this.started) {
            return;
        }
        if (item === 'clam') {
            this.score++;
            this.updateScoreBoard();
            if (this.score === this.clamCount) {
                this.finish(true);
            }
            else if (item === 'crab') {
                this.finish(false);
            }
        }
    }

    stopGameTimer() {
        clearInterval(this.timer);
    }
    
    hideGameButton() {
        this.gameBtn.style.visibility = 'hidden';
    }
    
    
    init () {
        this.score = 0;
        this.gameScore.innerText = this.clamCount;
        this.gameField.init();
    }
    
    updateScoreBoard() {
        this.gameScore.innerText = this.clamCount - this.score;
    }
    
    showStopButton() {
        const icon = this.gameBtn.querySelector('.fas');
        icon.classList.add('fa-stop');
        icon.classList.remove('fa-play');
        this.gameBtn.style.visibility = 'visible';
    }
    
    showTimerAndScore () {
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    }
    
    startGameTimer () {
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec);
        this.timer = setInterval(() => {
            if(remainingTimeSec <= 0) {
                clearInterval(this.timer);
                this.finish(this.clamCount === this.score);
                return;
            }
            this.updateTimerText(--remainingTimeSec);
        }, 1000);
    }
    
    updateTimerText(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerText = `${minutes}:${seconds}`;
    }
    
}