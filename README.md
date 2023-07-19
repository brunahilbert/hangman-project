Inquirer is a tool that can help us create command-line user interfaces.

We will start off by asking for guesses for letters from the player. From here, the game’s state can branch into two ways. If all letters are guessed, the player wins the game. If there are no remaining guesses, the player loses.

On a deeper level, we will start off with a random word that needs to be guessed. We can have 10 wrong guesses before we lose the game. For each letter guessed, we want to reveal where the letter is positioned in the word, and how many letters the word has. We want to keep going until all letters are guessed correctly, or we run out of wrong guesses.

To summarize:

We want to start off with a random word and 10 possible wrong guesses
We want to ask for a letter, and we want to verify if the input is a letter
We want to turn the guess into lowercase to make sure it matches the word that we store in lowercase
If the letter has already been guessed, we want to ask for a new guess
If the guess was right, we want to show the letter in the word
If all letters are guessed, the player wins, otherwise we ask for a new guess
If the guess was wrong, we reduce the number of remaining guesses
If there are no more remaining guesses, we lose the game, otherwise, we can have another guess