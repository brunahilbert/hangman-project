import inquirer from 'inquirer';
import data from './data.js';

const [words, state] = data;
const [words, tips, state] = data;

const guessedLetters = [];
const word = words[Math.floor(Math.random() * words.length)];
const wordIndex = words.indexOf(word);
const tip = tips[wordIndex];
let guessesRemaining = 7;

const askForLetter = () => {

    // prompt method from inquirer can be used to ask questions in the command line
    inquirer.prompt([{
        // name of the question
        name: 'letter',
        type: 'input',
        message: 'Gess a letter:',
        validate(value) {
            if (/^[A-Za-z]$/.test(value)) {
                return true;
            }
            console.log(' is NOT a letter!');
            return false;
        }
    }]).then(input => {
        const guessedLetter = input.letter.toLowerCase();
        if (!guessedLetters.includes(guessedLetter)) {

            // This letter has not been guessed yet, so let's test it
            guessedLetters.push(guessedLetter);

            console.log(getObscuredWord());

        } else {
            console.log('Already guessed, try another letter.');
            askForLetter();
        }
    })

}

const getObscuredWord = () => {
    const obscuredWord = word.split('').map(letter => {
        if (guessedLetters.includes(letter)) {
            return letter;
        }
        return '_';
    }).join('');

    return `Your word is: ${obscuredWord}`;
}

console.log('Welcome to Hangman!');
console.log('___________________');
console.log(`The tip is: ${tip}`);

askForLetter();