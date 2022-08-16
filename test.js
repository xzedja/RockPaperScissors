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


// playerButtons.forEach((btn) => {
//     btn.addEventListener('click', getPlayerChoice)
// })



// let playerInput;

imgList = {
    "rock" : "img\\rock.jpeg",
    "paper" : "img\\paper.jpeg",
    "scissors": "img\\scissors.png"
}
// function addNewElement(computerChoice) {
//     console.log(computerChoice);
//     if (document.getElementById("computer-choice")) {
//         let img = document.getElementById("computer-img");
//         img.setAttribute("src",computerChoice);
//     } else {
//         let img = document.createElement("img");
//         img.setAttribute("src", computerChoice);
//         console.log(computerChoice);
//         img.setAttribute("id", "computer-img");
//         let div = document.getElementById("computer-choice");
//         div.setAttribute("width", "75px");
//         div.setAttribute("height", "75px");
//         div.appendChild(img);
//     }
//     // } else {
//     //     let img = document.getElementById("computer-img");
//     //     img.src = computerChoice;
//     // }
// }


document.querySelector(".options-container").addEventListener('click', event => { 
    if (event.target.className == "button") {
        let playerInput = event.target.alt;
        document.getElementById("results").innerHTML = playerInput;
        ans = getComputerChoice();

        document.getElementById("display-choice").src = imgList[ans];
        console.log("Image displaying: " + imgList[ans]);
        // event.target.style.filter="grayscale(0%)";
        document.getElementById("results").innerHTML = "You chose " + playerInput + ". The computer picked " + ans + ".";
        // console.log(ans + " " + playerInput);
        playRound(playerInput, ans);
        document.getElementById("player").innerHTML = playerScore;
        document.getElementById("computer").innerHTML = computerScore;
        gameReset();
        // console.log("Player score: " + playerScore + "Computer Score: " + computerScore);
    }});

function gameReset() {
    if ((playerScore == 5) || (computerScore == 5)) {
        document.getElementById("reset").style.visibility = 'visible';
    }
}

let resetButton = document.querySelector(".results-container");
resetButton.addEventListener('click', resetGame);

function resetGame(event) {
    if (event.target.className == "reset") {
        playerScore = 0;
        computerScore = 0;
        document.getElementById("reset").style.visibility = 'hidden';
        document.getElementById("player").innerHTML = playerScore;
        document.getElementById("computer").innerHTML = computerScore;
        document.getElementById("results").innerHTML = "";
        document.getElementById("game").innerHTML = "";
        document.getElementById("display-choice").removeAttribute("src");
    }
}

// document.querySelector(".results-container").addEventListener('click', event => {
//     if (event.target.className == "result") {
//         playerScore == 0;
//         computerScore == 0;
//     }
// });

// function getPlayerChoice(e) {
//     // let playerInput = document.getElementById('input').value.toLowerCase();
//     let playerInput = e.target.alt;
//     // console.log(playerInput.toLowerCase());
//     document.getElementById("results").innerHTML = playerInput;
//     ans = getComputerChoice();
//     console.log(ans + " " + playerInput);
//     playRound(playerInput, ans);
//     console.log("Player score: " + playerScore + "Computer Score: " + computerScore);
// }
