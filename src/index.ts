import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
    background: '#1099bb',
    resizeTo: window,
});

// Deck of cards
// number of players
// Difficulty level

// Player a selects another player b to request a card from.
// Player a selects a suit to request.

// If player b has a card number (A,K,Q,J,1-10)
// player b must give all cards of that number to player a if they have any.
// If player b has none, they say "go fish" and player a draws a card from the deck.

// Objects
// Deck
// Player
// Card
// Game



let iCanvas = document.body.appendChild(app.view);
