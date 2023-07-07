'use strict';
import PopUp from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(()=> {
    game.start();
});

const game = new GameBuilder()
    .gameDuration(5)
    .clamCount(10)
    .crabCount(10)
    .build();

game.setGameStopListener((reason) => {
    let message;
    switch(reason) {
        case 'cancel':
            message = 'Replay';
            break;
        case 'win':
            message = 'YOU WON!';
            break;
        case 'lose':
            message = 'YOU LOST ..';
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
})





