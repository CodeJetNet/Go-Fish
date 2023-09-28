import {Deck} from "./deck";
import {Player} from "./player";

export class Game {
    players: Player[] = [];
    deck: Deck = new Deck();

    constructor() {
        this.createPlayers();
        this.dealCards();
    }

    /**
     * Starting with just two players because I'm lazy.
     */
    createPlayers() {
        this.players.push(new Player('Player 0'));
        this.players.push(new Player('The Computer'));
    }

    dealCards() {
        // @todo - If there are more cards to deal than there are cards in the deck, throw an error.
        // Or just limit the number of players to 10 for a playable nonsensically short game.
        for (let i = 0; i < this.cardsToDeal(); i++) {
            for (let j = 0; j < this.players.length; j++) {
                this.players[j].hand.push(this.deck.dealCard());
            }
        }
    }

    /**
     * Deal 7 cards to players (up to 3 players)
     * Deal 5 cards to players (4 or more players)
     */
    cardsToDeal() {
        return this.players.length > 3 ? 5 : 7;
    }
}
