# Hangman Game

Welcome to the Hangman Game! This is a simple command-line Hangman game implemented in JavaScript using the `inquirer` library.

## How to Play

1. Clone or download the repository to your local machine.

2. Open your terminal or command prompt and navigate to the project directory.

3. Run the following command to install the required dependencies:

	`npm install`

4. Start the game by running the following command:

	`node hangman.js`

5. Follow the on-screen instructions to guess letters and try to uncover the hidden word. You have a limited number of guesses, so choose wisely!

## How the Game Works

1. The game selects a random word from a predefined list.

2. The game displays the tip related to the chosen word.

3. You need to guess individual letters of the word using your keyboard.

4. Each incorrect guess will decrease your remaining guesses. You have a total of 7 guesses.

5. If you correctly guess all the letters in the word, you win the game.

6. If you run out of guesses before guessing the entire word, the game is over.

7. After each guess, the game displays the obscured word, indicating the correctly guessed letters and placeholders for the unknown letters.

**Enjoy the game and have fun guessing words!**