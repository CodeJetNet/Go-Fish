import * as PIXI from "pixi.js";

export class Card {
    static suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    static ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    suit: string;
    rank: number;
    asset: PIXI.Sprite;

    constructor(suit: string, rank: number) {
        // @todo - Validate that suit & rank are in the list of valid suits & ranks.
        this.suit = suit;
        this.rank = rank;
        this.asset = PIXI.Sprite.from(`assets/cards/${this.imageName()}`);
    }

    setCardWidth(width: number) {
        this.asset.width = width;
        this.asset.height = width * 1.45;
    }

    getReadableRank() {
        let rank = this.rank.toString();
        switch (this.rank) {
            case 11:
                rank = 'Jack';
                break;
            case 12:
                rank = 'Queen';
                break;
            case 13:
                rank = 'King';
                break;
            case 14:
                rank = 'Ace';
                break;
        }

        return rank;
    }

    imageName() {
        let rank = this.getReadableRank();
        return `${rank}_of_${this.suit}.png`;
    }
}
