var words = ['apple', 'banana', 'computer', 'elephant', 'guitar', 'happy', 'internet', 'jump', 'kangaroo', 'lemon', 'monkey', 'ninja', 'orange', 'pizza', 'queen', 'robot', 'soccer', 'tiger', 'unicorn', 'volleyball'];
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

export default [words, state];