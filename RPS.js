let num = 0;
let userScore = 0;
let compScore = 0;
const totalGames_div = document.querySelector('.total-Games')
const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.querySelector('#R')
const paper_div = document.querySelector('#P')
const scissors_div = document.querySelector('#S')

function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors']
    let randIndex = Math.floor(Math.random() * 3)
    return choices[randIndex]
}

function game(userChoice){
    const computerChoice = getComputerChoice()
    if(userChoice === computerChoice){
        num+=1
        totalGames_div.textContent = `Round:${num}`
        const cpuChoice = document.createElement('p')
        const result = document.createElement('p')
        
        result_div.textContent = `You Chose: ${userChoice}`;
        cpuChoice.textContent = `Computer Chose: ${computerChoice}`;
        result.textContent = "It's a draw"

        result_div.append(cpuChoice)
        result_div.append(result)
    }else if(userChoice === 'Rock' && computerChoice === 'Paper'){
        num+=1
        compScore+=1

        totalGames_div.textContent = `Round:${num}`
        compScore_span.textContent = `${compScore}`
        const cpuChoice = document.createElement('p')
        const result = document.createElement('p')
        
        result_div.textContent = `You Chose: ${userChoice}`;
        cpuChoice.textContent = `Computer Chose: ${computerChoice}`;
        result.textContent = "Computer Win's Try again"


        result_div.append(cpuChoice)
        result_div.append(result)
    }else if(userChoice === 'Paper' && computerChoice === 'Scissors'){
        num+=1
        compScore+=1

        totalGames_div.textContent = `Round:${num}`
        compScore_span.textContent = `${compScore}`
        const cpuChoice = document.createElement('p')
        const result = document.createElement('p')
        
        result_div.textContent = `You Chose: ${userChoice}`;
        cpuChoice.textContent = `Computer Chose: ${computerChoice}`;
        result.textContent = "Computer Win's Try again"


        result_div.append(cpuChoice)
        result_div.append(result)
    }else if(userChoice === 'Scissors' && computerChoice ==='Rock'){
        num+=1
        compScore+=1

        totalGames_div.textContent = `Round:${num}`
        compScore_span.textContent = `${compScore}`
        const cpuChoice = document.createElement('p')
        const result = document.createElement('p')
        
        result_div.textContent = `You Chose: ${userChoice}`;
        cpuChoice.textContent = `Computer Chose: ${computerChoice}`;
        result.textContent = "Computer Win's Try again"


        result_div.append(cpuChoice)
        result_div.append(result)
    }else{
        num+=1
        userScore+=1

        totalGames_div.textContent = `Round:${num}`
        userScore_span.textContent = `${userScore}`
        const cpuChoice = document.createElement('p')
        const result = document.createElement('p')
        
        result_div.textContent = `You Chose: ${userChoice}`;
        cpuChoice.textContent = `Computer Chose: ${computerChoice}`;
        result.textContent = "👍You Win!!👍"


        result_div.append(cpuChoice)
        result_div.append(result)
    }


    const winning = document.querySelector('.winning')
    winning.style.fontSize = '1.5rem'
    winning.style.margin = '10px';
    scoreBoard_div.style.height='170px'
    if(compScore > userScore){
        winning.textContent = 'Computer is in the lead'
    }else if(compScore === userScore){
        winning.textContent = 'You are both tied'
    }else{
        winning.textContent = 'User is in the lead.'
    }

    
}

// When you click on the buttons
function main(){
    rock_div.addEventListener('click', function(){
        game('Rock')
        
    })
    paper_div.addEventListener('click', function(){
        game('Paper')
        
    })
    scissors_div.addEventListener('click', function(){
        game('Scissors')
        
    })
}

main()