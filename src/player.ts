import {Card} from './card';

export class Player {
    name: string;
    isComputer: boolean;
    hand: Card[] = [];

    constructor(name: string, isComputer: boolean = false) {
        this.name = name;
        this.isComputer = isComputer;
    }
}
