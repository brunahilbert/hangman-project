var words = ['apple', 'banana', 'computer', 'elephant', 'guitar', 'happy', 'internet', 'jump', 'kangaroo', 'lemon', 'monkey', 'ninja', 'orange', 'pizza', 'queen', 'robot', 'soccer', 'tiger', 'unicorn', 'volleyball'];
var tips = ['Fruit', 'Fruit', 'Play games', 'Animal', 'Instrument', 'Emotinal state', 'Computer', 'Movement', 'Animal', 'Fruit', 'Animal', 'Martial arts', 'Color', 'Food', 'Royals', 'Artificial intelligence', 'Game', 'Animal', 'Mystical creature', 'Game'];
const state = [
  '',
  `
    +---+
    |   
    |
    |
    ===
  `,
  `
    +---+
    |   O
    |
    |
    ===
  `,
  `
    +---+
    |   O
    |   |
    |
    ===
  `,
  `
    +---+
    |   O
    |  /|
    |
    ===
  `,
  `
    +---+
    |   O
    |  /|\\
    |
    ===
  `,
  `
    +---+
    |   O
    |  /|\\
    |  /
    ===
  `,
  `
    +---+
    |   X
    |  /|\\
    |  / \\
    ===
  `
];

export default [words, tips, state];