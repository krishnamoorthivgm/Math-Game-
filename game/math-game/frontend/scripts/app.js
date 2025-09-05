// JavaScript logic for the math game

const questionDisplay = document.getElementById('question-display');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const scoreDisplay = document.getElementById('score-display');
const timerDisplay = document.getElementById('timer-display');
const gameContainer = document.querySelector('.game-container');
const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const userDisplay = document.getElementById('user-display');
const endDisplay = document.getElementById('end-display');
const restartButton = document.getElementById('restart-button');

let score = 0;
let timeLeft = 30;
let currentAnswer = null;
let timer = null;
let userName = "";

function showGameElements(show) {
    questionDisplay.style.display = show ? 'block' : 'none';
    answerInput.style.display = show ? 'inline-block' : 'none';
    submitButton.style.display = show ? 'inline-block' : 'none';
    scoreDisplay.style.display = show ? 'block' : 'none';
    timerDisplay.style.display = show ? 'block' : 'none';
    userDisplay.style.display = show ? 'block' : 'none';
}

// Generate a random math question
function generateQuestion() {
    const operations = ['+', '-', '*', '/'];
    const op = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, question, answer;

    switch (op) {
        case '+':
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * 50) + 1;
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            num1 = Math.floor(Math.random() * 50) + 1;
            num2 = Math.floor(Math.random() * num1) + 1; // ensure non-negative
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '*':
            num1 = Math.floor(Math.random() * 12) + 1;
            num2 = Math.floor(Math.random() * 12) + 1;
            question = `${num1} × ${num2}`;
            answer = num1 * num2;
            break;
        case '/':
            num2 = Math.floor(Math.random() * 12) + 1;
            answer = Math.floor(Math.random() * 12) + 1;
            num1 = num2 * answer; // ensures integer division
            question = `${num1} ÷ ${num2}`;
            break;
    }
    questionDisplay.textContent = question;
    currentAnswer = answer;
    answerInput.value = '';
}

// Handle answer submission
function showFeedback(isCorrect) {
    if (isCorrect) {
        gameContainer.classList.add('correct');
    } else {
        gameContainer.classList.add('incorrect');
    }
    setTimeout(() => {
        gameContainer.classList.remove('correct');
        gameContainer.classList.remove('incorrect');
    }, 2000);
}

function submitAnswer() {
    const userAnswer = Number(answerInput.value);
    if (userAnswer === currentAnswer) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        showFeedback(true);
    } else {
        showFeedback(false);
    }
    generateQuestion();
}

// Timer logic
function startTimer() {
    timerDisplay.textContent = `Time: ${timeLeft}`;
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

// End game
function endGame() {
    showGameElements(false);
    endDisplay.style.display = 'block';
    endDisplay.innerHTML = `<h2>Game Over!</h2>
        <p>Player: <strong>${userName}</strong></p>
        <p>Your Score: <strong>${score}</strong></p>`;
    restartButton.style.display = 'inline-block';
}

function restartGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = `Score: ${score}`;
    endDisplay.style.display = 'none';
    restartButton.style.display = 'none';
    answerInput.disabled = false;
    submitButton.disabled = false;
    showGameElements(true);
    generateQuestion();
    startTimer();
}

// Event listeners
loginButton.addEventListener('click', function() {
    const nameVal = nameInput.value.trim();
    const emailVal = emailInput.value.trim();
    if (nameVal && emailVal) {
        userName = nameVal;
        userDisplay.textContent = `Player: ${userName}`;
        loginForm.style.display = 'none';
        showGameElements(true);
        generateQuestion();
        startTimer();
    } else {
        alert('Please enter your name and email.');
    }
});

submitButton.addEventListener('click', submitAnswer);
answerInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') submitAnswer();
});
restartButton.addEventListener('click', restartGame);