import {Card} from "./card"

export class Deck {
    cards: Card[] = [];
    suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    ranks = ['ace', 'king', 'queen', 'jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
    constructor() {
        this.createDeck();
        this.shuffle();
    }

    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                this.cards.push(new Card(this.suits[i], this.ranks[j]));
            }
        }
    }

    shuffle() {
        let m = this.cards.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
    }

    dealCard(): Card {
        let card = this.cards.pop();
        if (card !== undefined) {
            return card;
        }
        throw new Error('No more cards in the deck.');
    }

    hasRemainingCards(): boolean {
        return this.cards.length > 0;
    }
}
