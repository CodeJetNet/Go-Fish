import {Card} from './card';

export class Player {
    name: string;
    isComputer: boolean;
    hand: Card[] = [];
    books: number = 0;

    constructor(name: string, isComputer: boolean = false) {
        this.name = name;
        this.isComputer = isComputer;
    }

    getCardsWithRank(card: Card): Card[] {
        // Get all cards with matching rank from hand.
        return this.hand.filter((c) => c.rank === card.rank);
    }

    getAndRemoveCardsWithRank(card: Card): Card[] {
        // Get all cards with matching rank from hand.
        let cards = this.hand.filter((c) => c.rank === card.rank);
        // Remove the cards from the hand.
        this.hand = this.hand.filter((c) => c.rank !== card.rank);
        // Return the cards.
        return cards;
    }

    getHand() {
        this.hand.sort((a,b) => a.rank - b.rank);
        return this.hand;
    }

    addCard(card: Card) {
        this.hand.push(card);

        let potentialBook = this.getCardsWithRank(card);
        if (potentialBook.length == 4) {
            this.books++;
            this.getAndRemoveCardsWithRank(card);
        }
    }
}
