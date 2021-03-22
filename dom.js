let playerScore = 0
let Pcscore = 0
let rounds = 1

rockImg.onclick = chooseRock
paperImg.onclick= choosePaper
scissorImg.onclick = chooseScissor

const playerOrpc = document.querySelector('#playerOrpc')
const score = document.querySelector('#score')
const winnerIMG = document.querySelector('#winnerIMG')
const resultBox = document.querySelector('.result h3')
const roundCount = document.querySelector('#roundCount')

function chooseRock(){
    playerSelect = 'rock'
    console.log('Player: ' + playerSelect)

    playRound()
}

function choosePaper(){
    playerSelect = 'paper'
    console.log('Player: ' + playerSelect)

    playRound()
}

function chooseScissor(){
    playerSelect = 'scissor'
    console.log('Player: ' + playerSelect)

    playRound()
}

function playRound(){
    computerPlay()
    console.log('PC: ' + computerSelect)

    if(rounds == 5){
        score.textContent = `score: ${playerScore} - ${Pcscore}`
            if(playerScore > Pcscore){
                playerWinChange()

            }
            else{
                pcWinChange()
            }
            playerScore = 0
            Pcscore = 0
            rounds = 0
            roundCount.textContent = `round: ${rounds}`

    
    }

    else if (playerSelect == computerSelect){
        
        console.log("it's a draw!")
        playerOrpc.textContent = 'winner of this round: No one'
        winnerIMG.setAttribute('src', 'znemo.jpg')
        resultBox.setAttribute("style", "background-color: #add8e6;");
        rounds++
        roundCount.textContent = `round: ${rounds}`

    }

    else if (playerSelect == "paper" && computerSelect != "scissor" ||
             playerSelect == "rock" && computerSelect != "paper" ||
             playerSelect == "scissor" && computerSelect != "rock"){
            
            playerWinChange()
             
    }
            
    else{
        pcWinChange()
    }
    score.textContent = `score: ${playerScore} - ${Pcscore}`
    roundCount.textContent = `round: ${rounds}`

    console.log('player score: ' + playerScore)
    console.log('pc score: ' + Pcscore)
    console.log(rounds)

}

function computerPlay(){
    ai = Math.floor(Math.random()*10+3);
    if (ai <= 4){
        computerSelect = 'rock'
    }
    
    else if(ai > 4 && ai <= 8 ){
        computerSelect = 'paper'
    }
    else{
        computerSelect = 'scissor'
    }
}

function playerWinChange(){

   if (rounds == 5){
        winnerIMG.setAttribute('src', 'zwinmagneto.jpg')
        playerOrpc.textContent = 'Congrats! You won the game'
   }
   else{
        playerScore++
        winnerIMG.setAttribute('src', 'zdavid.png')
        playerOrpc.textContent = 'winner of this round: You'
        console.log(`player wins! ${playerSelect} beats ${computerSelect}!`)
        rounds++
   }
   resultBox.setAttribute("style", "background-color: #a2f3a2;");
}

function pcWinChange(){

    if (rounds == 5){
        winnerIMG.setAttribute('src', 'zvisionwin.jpg')
        playerOrpc.textContent = 'Congrats! A fkin computer beat you'
    }
    else{
        Pcscore++
        winnerIMG.setAttribute('src', 'zvision.jpg')
        playerOrpc.textContent = 'winner of this round: PC'
        console.log(`computer wins! ${computerSelect} beats ${playerSelect}!`)
        rounds++
    }
    resultBox.setAttribute("style", "background-color: rgb(236, 72, 72);");
}

