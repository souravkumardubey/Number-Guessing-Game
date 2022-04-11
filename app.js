// Games values

let min = 1 , max = 10 , winningNum = getWinningNum( min , max) , guessLeft = 3;

// UI elements

const game = document.querySelector('#game') , minNum = document.querySelector(".min-num");
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// play again event listener

game.addEventListener('mousedown' , function(e){

    if ( e.target.className === 'play-again' ) {

        window.location.reload();

    }
});

// listen for guess

guessBtn.addEventListener('click',function(){
    let val = parseInt(guessInput.value);
    // console.log(val);

    // validate

    if ( isNaN(val) || ( val < min || val > max ) ) {

        guessBtn.value = 'PLAY AGAIN';
        guessInput.disabled = true;
        guessBtn.className += 'play-again';
        guessInput.style.borderColor = 'red';
        setMessage(`Please enter a number between ${min} and ${max}` , 'red');
        return;

    }

    if ( val == winningNum ) {

        // disable input
        guessBtn.value = 'PLAY AGAIN';
        guessInput.disabled = true;
        guessBtn.className += 'play-again';
        guessInput.style.borderColor = 'green'
        setMessage(`There you go! Correct Answer!` , 'green');

    }
    else {
        
        guessLeft -= 1;
        
        if ( guessLeft === 0 ) {
            // Game Over - lost
            guessBtn.value = 'PLAY AGAIN';
            guessInput.disabled = true;
            guessBtn.className += 'play-again';
            guessInput.style.borderColor = 'red';
            setMessage(`Game Over, you Lost. The number was ${winningNum}` , 'red');

        }
        else {

            // Game continues - answer wrong
            guessInput.disabled = false;
            guessInput.style.borderColor = 'red';
            setMessage(`Incorrect guess. ${guessLeft} guesses left.` , 'red');


        }

    }

});


// get winning number 

function getWinningNum( min , max ) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min);
}


function setMessage( msg , color ) {

    message.textContent = msg;
    guessInput.style.borderColor = color;
    message.style.color = color;

}
