function play(playersChoice) {
    let computerChoice = 'rock'
    if (playersChoice === 'rock') {

        if (computerChoice === 'rock') {
            return "Tie Game"
        }
        if (computerChoice === 'paper') {
            return "Computer wins"
        }
        return "User wins"
        if (playersChoice === 'paper') {

            if (computerChoice === 'rock') {
                return "User wins"
            }
            if (computerChoice === 'paper') {
                return "Tie Game"
            }
            return "Computer wins"
        }
    } else
        if (playersChoice === 'scissors') {
            return "Computer wins"
        }
    if (computerChoice === 'rock') {
        return "Computer wins"
    }
    if (computerChoice === 'paper') {
        return "User wins"
    }
    if (computerChoice === 'scissors') {
        return "Tie game"
    }
}