import * as PIXI from "pixi.js";
export class Card {
    suit: string;
    rank: string;
    asset: PIXI.Sprite;
    constructor(suit: string, rank: string) {
        this.suit = suit;
        this.rank = rank;
        this.asset = PIXI.Sprite.from(`assets/cards/${rank}_of_${suit}.png`);
    }
}
