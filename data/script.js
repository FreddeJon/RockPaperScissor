const rock_button = document.createElement('button');
rock_button.setAttribute('id', 'choice-btn');
rock_button.setAttribute('title', 'Rock');
rock_button.textContent = 'Rock';

const paper_button = document.createElement('button');
paper_button.setAttribute('id', 'choice-btn');
paper_button.setAttribute('title', 'Paper');
paper_button.textContent = 'Paper';

const scissors_button = document.createElement('button');
scissors_button.setAttribute('id', 'choice-btn');
scissors_button.setAttribute('title', 'Scissors');
scissors_button.textContent = 'Scissors';



const run_button = document.createElement('button');
run_button.setAttribute('id', 'run');
run_button.textContent = 'Run';

const para = document.createElement('p')
const score = document.createElement('p');


const moves = ['Rock', 'Paper', 'Scissors'];
let rounds = 1;
let playerScore = 0;
let computerScore = 0;


function game() {
    const buttonSection = document.getElementById('buttonDiv');
    buttonSection.appendChild(rock_button);
    buttonSection.appendChild(scissors_button);
    buttonSection.appendChild(paper_button);
    buttonSection.appendChild(para);
    buttonSection.appendChild(score);

    const buttons = document.querySelectorAll('[id=choice-btn]');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerPlay = button.title;

            playRound(playerPlay, computerPlay())

        })
    })
}

function playRound(playerSelection, computerSelection) {
    rounds = rounds + 1;

    if (playerSelection === computerSelection) {
        para.textContent = `You: ${playerSelection} Computer: ${computerSelection} It\'s a tie`;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        para.textContent = `You: ${playerSelection} Computer: ${computerSelection} You won`;
        playerScore++;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        para.textContent = `You: ${playerSelection} Computer: ${computerSelection} You won`;
        playerScore++;
    } else if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
        para.textContent = `You: ${playerSelection} Computer: ${computerSelection} You won`;
        playerScore++;
    } else {
        para.textContent = `You: ${playerSelection} Computer: ${computerSelection} Computer won`;
        computerScore++;
    }

    score.textContent = `[Player] ${playerScore} [Computer] ${computerScore}`;

    if (playerScore > 4 || computerScore > 4) {
        if (playerScore > computerScore) {
            para.textContent = 'Player won!';
        } else {
            para.textContent = 'Computer won';
        }
        resetScore();
    }
}

function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
}


function resetScore() {
    rounds = 1;
    playerScore = 0;
    computerScore = 0;
}



