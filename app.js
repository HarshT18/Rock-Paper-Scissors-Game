
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');

const playerCount = document.querySelector('.p-count');
const computerCount = document.querySelector('.c-count');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');

const result = document.getElementById('result');
const resetBtn = document.querySelector('.reset');

let playerScore = 0;
let computerScore = 0;
// let moves = 0;

function computerPlay(){
    const choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random()*3)];
    
}


function playRound(playerSelection, computerSelection){
    playerChoice.textContent = `${playerSelection}`;
    computerChoice.textContent = `${computerSelection}`;

    if(playerSelection === computerSelection){
        result.textContent = "It's a tie!";
    }

    else if(
        (playerSelection==='Rock' && computerSelection === 'Scissor') ||
        (playerSelection==='Paper' && computerSelection === 'Rock') ||
        (playerSelection==='Scissor' && computerSelection === 'Paper')
    )
    {
        result.textContent = "You win!";
        playerScore++;
    }

    else{
        result.textContent = "Computer wins!";
        computerScore++;
    }
    playerCount.textContent = playerScore;
    computerCount.textContent = computerScore;
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    playerCount.textContent = '0';
    computerCount.textContent = '0';
    playerChoice.textContent = '';
    computerChoice.textContent = '';
    result.textContent = '';
}

rockBtn.addEventListener('click', () => {
    // playerChoice.textContent = 'Rock';
    playRound('Rock', computerPlay());
});

paperBtn.addEventListener('click', () => {
    // playerChoice.textContent = 'Paper';
    playRound('Paper', computerPlay());
});

scissorBtn.addEventListener('click', () => {
    // playerChoice.textContent = 'Scissor';
    playRound('Scissor', computerPlay());
});

resetBtn.addEventListener('click', () =>{
    reset();
});