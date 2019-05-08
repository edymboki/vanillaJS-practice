//@ts-check

function specialMultiply(a,b){
    
}

function guessingGame(amount){
    let ans = Math.floor(Math.random() * 11);
    let guesses = 0;
    return function(guess){
        if(guesses > amount){
            return "You are all done playing!";
        } else {
            if(guess === ans){
                guesses = amount + 1;
                return "You got it!";
            } else if(guess < ans){
                guesses++;
                return "Try a higher number";
            } else {
                guesses++;
                return "Try a lower number";
            }
        }
    };
}