'use strict';
import PopUp from './popup.js';
import { GameBuilder, Reason } from './game.js';

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(()=> {
    game.start();
});

const game = new GameBuilder()
    .withGameDuration(10)
    .withClamCount(10)
    .withCrabCount(10)
    .build();

game.setGameStopListener((reason) => {
    let message;
    switch(reason) {
        case Reason.cancel:
            message = 'Replay';
            break;
        case Reason.win:
            message = 'YOU WON!';
            break;
        case Reason.lose:
            message = 'YOU LOST ..';
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
})





