import * as PIXI from "pixi.js";
import {Game} from "./game";
import {Card} from "./card";
import {Player} from "./player";

export class App {
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
        this.layoutPlayerCards();
    }

    layoutPlayerCards() {
        // Clear the stage before laying out all the player cards.
        // This can't be how it should be done.
        this.app.stage.children.forEach((c) => {
            this.app.stage.removeChild(c)
        })

        // This is dumb, these cards should overlap, but sadly we're not professionals here.
        let cards = 0;
        let row = 0;
        let cardsPerRow = Math.floor(this.app.view.width / 20) - 1;
        for (let card of this.game.currentPlayer().getHand()) {
            card.setCardWidth(100);
            if (cards > cardsPerRow) {
                cards = 0;
                row++;
            }
            card.asset.x = cards * 20;
            card.asset.y = row * 145;
            card.asset.eventMode = 'static';
            card.asset.cursor = 'pointer';
            if (card.asset.eventNames().length == 0) {
                // the pointerdown event has not been added.
                card.asset.on('pointerdown', () => {
                    // Ask for the card.
                    this.askForCard(this.game.currentPlayer(),this.game.computerPlayer(), card);
                    // If other player doesn't have the card, Go Fish.
                    // Let the computer player go.
                });
            }
            this.app.stage.addChild(card.asset);
            cards++;
        }
    }

    /**
     * This could probably be in the game itself. Not the app.
     */
    askForCard(player: Player, opponent: Player, card: Card) {
        let cards = opponent.getAndRemoveCardsWithRank(card);
        if (!cards.length) {
            if (player == this.game.currentPlayer()) {
                // We're asking the computer for the card, so let the human know they fail at life.
                alert("Go Fish.");
            } else {
                alert(`The computer asked for a ${card.getReadableRank()}, but you don't have it`);
            }
            this.goFish(player);
            return;
        }

        cards.forEach((c) => {
            player.addCard(c);
        });
        if(player == this.game.currentPlayer()) {
            alert("You got a card! Play again.");
        } else {
            // @todo - Computer should play again.
            alert("You lost a card:" + cards[0].getReadableRank());
        }
        this.layoutPlayerCards();
    }

    goFish(player: Player) {
        if (!this.game.deck.hasRemainingCards()) {
            this.gameOver();
            return;
        }

        player.addCard(this.game.deck.dealCard());
        this.layoutPlayerCards();
        if(player == this.game.currentPlayer()) {
            this.computerPlay();
        }
    }

    computerPlay() {
        // @todo - Support different difficulty levels.  If the computer selects random every time, it's not very difficult to beat.
        let card = this.game.computerPlayer().hand[Math.floor(Math.random() * this.game.computerPlayer().hand.length)];
        // Computer player selects a player to ask for the card.
        this.askForCard(this.game.computerPlayer(), this.game.currentPlayer(), card);
    }

    gameOver() {
        if(this.game.players[0].books > this.game.players[1].books) {
            alert("You win!");
        } else {
            alert("You lose!");
        }

        this.game = new Game();
        this.start();
    }
}
