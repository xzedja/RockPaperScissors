let ans;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10);
    if (choice % 3 == 0 ) {
        // ans = "rock";
        return "rock";
    } else if (choice % 3 == 2) {
        // ans = "scissor";
        return "scissors";
    } else{
        // ans = "paper";
        return "paper";
    }
}

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function getClick() {
//     btn.textContent = getComputerChoice();
// });


function playRound(playerSelection,computerSelection) {
    if ((computerSelection == 'rock') && (playerSelection == 'paper')) {
        document.getElementById("game").innerHTML = "You win the round! Paper Beats Rock!";
        playerScore += 1;
    } else if ((computerSelection  == 'rock') && (playerSelection == 'scissors')) {
        document.getElementById("game").innerHTML = "You lose the round! Scissor Beats Rock!";
        computerScore += 1;
    }else if ((computerSelection == 'paper') && (playerSelection == 'rock')) {
        document.getElementById("game").innerHTML = "You lose the round! Rock loses to Paper!";
        computerScore += 1;
    } else if ((computerSelection  == 'paper') && (playerSelection == 'scissors')) {
        document.getElementById("game").innerHTML = "You win the round! Scissor Beats Paper!";
        playerScore += 1;
    } else if ((computerSelection == 'scissors') && (playerSelection == 'paper')) {
        document.getElementById("game").innerHTML = "You lose the round! Paper loses Rock!";
        computerScore +=1;
    } else if ((computerSelection  == 'scissors') && (playerSelection == 'rock')) {
        document.getElementById("game").innerHTML = "You win the round! Scissor loses Rock!";
        playerScore += 1;
    } else {
        document.getElementById("game").innerHTML = "Tie game!";
    }
} 

// const input = document.querySelector('input');
// const log = document.getElementById('box');

// input.addEventListener('input', getPlayerChoice);
// let playerInput;

let playerButtons = document.querySelectorAll(".btn");
const display = document.querySelector('p');

// playerButtons.forEach( (btn)=>{
//     btn.addEventListener('click', ()=> {
//         const img  = document.querySelector("img");
//         // console.log(playerInput.alt.toLowerCase());
//         let playerInput = img.alt.toLowerCase();
//         document.getElementById("results").innerHTML = playerInput;
//     }) 
// });
// playerButtons.addEventListener('click', getPlayerChoice);
playerButtons.forEach((btn) => {
    btn.addEventListener('click', getPlayerChoice)
})
// let playerInput;

function getPlayerChoice(e) {
    // let playerInput = document.getElementById('input').value.toLowerCase();
    let playerInput = e.target.alt;
    // console.log(playerInput.toLowerCase());
    document.getElementById("results").innerHTML = playerInput;
    ans = getComputerChoice();
    console.log(ans + " " + playerInput);
    playRound(playerInput, ans);
    console.log("Player score: " + playerScore + "Computer Score: " + computerScore);
}
