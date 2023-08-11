var words = ['apple', 'banana', 'computer', 'elephant', 'guitar', 'happy', 'internet', 'jump', 'kangaroo', 'lemon', 'monkey', 'ninja', 'orange', 'pizza', 'queen', 'robot', 'soccer', 'tiger', 'unicorn', 'volleyball', 'developer', 'javascript', 'challenge', 'debugging', 'succulent', 'technology', 'creativity', 'accessibility', 'animation', 'grid', 'responsive'];
var tips = ['Fruit', 'Fruit', 'Play games', 'Animal', 'Instrument', 'Emotinal state', 'Connectivity', 'Movement', 'Animal', 'Fruit', 'Animal', 'Martial arts', 'Color', 'Food', 'Royals', 'Artificial intelligence', 'Game', 'Animal', 'Mystical creature', 'Game', 'Software', 'Code', 'Difficulty', 'Fixing', 'Plant', 'Innovation', 'Imagination', 'Inclusive design', 'Motion effects', 'Layout system', 'Adaptable'];
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