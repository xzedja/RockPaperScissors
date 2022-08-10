function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100);
    console.log(choice)
    if (choice % 3 == 0 ) {
        return "Rock;"
    } else if (choice % 3 == 2) {
        return "Scissor;"
    } else if (choice % 3 == 1){
        return "Paper;"
    }
} 

console.log(getComputerChoice());
