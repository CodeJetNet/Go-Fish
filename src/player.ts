import {Card} from './card';

export class Player {
    name: string;
    isComputer: boolean;
    hand: Card[] = [];

    constructor(name: string, isComputer: boolean = false) {
        this.name = name;
        this.isComputer = isComputer;
    }

    getCardsWithRank(card: Card): Card[] {
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
}
