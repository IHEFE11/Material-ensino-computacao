let secretWord = '';
let guessedLetters = new Set();

const configScreen = document.getElementById('config-screen');
const startGame = document.getElementById('startGame');
const letterBinary = document.getElementById('letter-binary');
const alphabetDisplay = document.getElementById('alphabet-display');
const showCongratsScreen = document.getElementById('show-Congrats-Screen');
const congratsScreen = document.getElementById('congrats-screen');
const finalWordDisplay = document.getElementById('final-word-display');
const restartButton = document.getElementById('restart-button');
const mainMenu = document.getElementById('main-menu');
const secretWordInput = document.getElementById('secret-word-input');
const letterGuessInput = document.getElementById('letter-input');
const confirm =  document.getElementById('confirm-Button');
const guessMessage = document.getElementById('guess-message');

function startGameHandler() {
    configScreen.classList.add('hidden');
    mainMenu.classList.remove('hidden');
    console.log('Game Started');
    secretWordInput.value.toUpperCase().trim();
    secretWord = secretWordInput.value;
    console.log('Palavra Secreta:', secretWord);
    letterBinaryHandler();
}

function letterBinaryHandler() {
    alphabetDisplay.innerHTML = ''; 
    letterGuessInput.value = '';
    letterGuessInput.focus();
    let isWordComplete = true;
    secretWord.split('').forEach(letter => {
        const span = document.createElement('span');
        span.classList.add('letter-Binary-span');
        const upperChar = letter.toUpperCase();
        console.log('Letra atual:', letter);
        console.log('Letras adivinhadas:', guessedLetters);
            if (guessedLetters.has(upperChar)) {
            span.textContent = upperChar;
            span.classList.add('correct');
            }
            else { 
                if (/^[A-Z]$/.test(letter.toUpperCase())) {
                letter = letter.toUpperCase().charCodeAt(0) - 64;
                letter = letter.toString(2).padStart(5, '0');
                span.textContent = letter
                isWordComplete = false;
                }
       }       
       isWordComplete = isWordComplete && guessedLetters.has(upperChar);
       console.log('isWordComplete:', isWordComplete);
     alphabetDisplay.appendChild(span);
    });
    if (isWordComplete) {
        showCongratsScreenHandler();
    }
}

function guessLetterHandler() {
    const guessedLetter = letterGuessInput.value.toUpperCase().trim();
    if (guessedLetter.length !== 1 || !/^[A-Z]$/.test(guessedLetter)) {
        guessMessage.textContent = 'Por favor, insira uma única letra válida (A-Z).';
        return;
    }

    if(guessedLetters.has(guessedLetter)){
        guessMessage.textContent = 'você já tentou essa letra. Tente outra!';
        console.log(guessedLetters);
        console.log('Letra correta adivinhada:', guessedLetter);
        return;
    } else {
        if (secretWord.toUpperCase().includes(guessedLetter.toUpperCase())) {
        guessMessage.textContent = `Parabéns! A letra "${guessedLetter}" está na palavra secreta.`;
        let letterReveled = guessedLetter;
        guessedLetters.add(guessedLetter);        
        letterBinaryHandler(letterReveled);
    } 
    else {
        guessedLetters.add(guessedLetter);
        guessMessage.textContent = `A letra "${guessedLetter}" não está na palavra secreta. Tente novamente!`;
        } 
    }
    letterBinaryHandler();
}
function showCongratsScreenHandler() {
    mainMenu.classList.add('hidden');
    congratsScreen.classList.remove('hidden');
    finalWordDisplay.textContent = secretWord.toUpperCase();

}
function restartGameHandler() {
    congratsScreen.classList.add('hidden');
    configScreen.classList.remove('hidden');
    secretWord = '';
    guessedLetters.clear();
    secretWordInput.value = '';
    letterGuessInput.value = '';
    guessMessage.textContent = '';
}

 


confirm.addEventListener('click', guessLetterHandler);
startGame.addEventListener('click', startGameHandler);
restartButton.addEventListener('click', restartGameHandler);
showCongratsScreen.addEventListener('click', showCongratsScreenHandler);
letterGuessInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        guessLetterHandler();
    }
});
