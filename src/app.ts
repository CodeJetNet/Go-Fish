import * as PIXI from "pixi.js";
import {Game} from "./game";

export class App {
    // Lay out the cards for player 1 on screen.
    // Let player 1 select a card to request from player 2.
    app: PIXI.Application;
    game: Game;

    constructor() {
        this.app = new PIXI.Application({
            background: '#1099bb',
            resizeTo: window,
        });

        this.game = new Game();

        document.body.appendChild(this.app.view);
        this.start();
    }

    start() {
        // Layout cards for player 1 on the screen.
        let cards = 0;
        for(let card of this.game.currentPlayer().hand) {
            card.setCardWidth(100);
            card.asset.x =  cards * 100;
            this.app.stage.addChild(card.asset);
            cards++;
        }
    }
}
