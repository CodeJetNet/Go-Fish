import {Card} from "./card"

export class Deck {
    cards: Card[] = [];
    constructor() {
        this.createDeck();
        this.shuffle();
    }

    createDeck() {
        for (let i = 0; i < Card.suits.length; i++) {
            for (let j = 0; j < Card.ranks.length; j++) {
                this.cards.push(new Card(Card.suits[i], Card.ranks[j]));
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
