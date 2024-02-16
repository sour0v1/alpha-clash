/* // hide and show section
// method 1
function play(){
    // step 1 - hide the home section to add 'hidden' class to home section
    const getHomeSection = document.getElementById('home-section');
    getHomeSection.classList.add('hidden');

    // step 2 - show the playground section to remove the 'hidden' class
    const getPlaygroundSection = document.getElementById('playground-section');
    getPlaygroundSection.classList.remove('hidden');
    
} */

function continueGame() {
    // step 1 - generate random alphabet
    const alphabet = getRandomAlphabet();

    // step 2 - set random alphabet to the screen
    const getCurrentAlphabet = document.getElementById('display');
    getCurrentAlphabet.innerText = alphabet;

    // set background color to key
    setBackgroundColor(alphabet);

}

// method 2
function enterGame() {
    // hide everything only show 
    hideElementById('home-section');
    hideElementById('score-section');
    showElementById('playground-section');

    // reset score and life
    setValueById('life', 5);
    setValueById('score', 0);
    continueGame();

}


function keyboardBtnPress(event) {
    const playerPress = event.key;
    console.log('pressed key - ', playerPress);
    // expected key 
    const getDisplayAlphabetElement = document.getElementById('display');
    const getDisplayAlphabet = getDisplayAlphabetElement.innerText;
    const getDisplayAlphabetToLowercase = getDisplayAlphabet.toLowerCase();
    console.log('expected key - ', getDisplayAlphabetToLowercase);

    // check right or wrong
    if (playerPress === getDisplayAlphabetToLowercase) {
        // console.log('Yeah..You got 1 point!');
        // Method 1
        /* // 1. get the current score
        const getCurrentScoreElement = document.getElementById('score');
        const getCurrentScoreText = getCurrentScoreElement.innerText;
        const currentScore = parseInt(getCurrentScoreText);  */

        // Mehod 2(by utility function)
        const currentScore = getElementValueById('score');
        // 2. increase the score 1
        const newScore = currentScore + 1;
        // 3. update the score
        setValueById('score', newScore)
        // start new round
        removeBackgroundColor(playerPress);
        continueGame();

    }
    else {
        // method 1
        /* const getLifeElement = document.getElementById('life');
        const getLifeElementText = getLifeElement.innerText;
        const getLife = parseInt(getLifeElementText); */

        // method 2(by utility function)
        const getLife = getElementValueById('life');
        const decreaseLife = getLife - 1;
        setValueById('life', decreaseLife);

        if (decreaseLife === 0) {
            hideElementById('playground-section');
            showElementById('score-section');
            // update final score
            const lastScoreValue = getElementValueById('score');
            setValueById('last-score', lastScoreValue);
            // clear last highlighted alphabet
            const getLastKeyElement = document.getElementById('display');
            const getLastKeyText = getLastKeyElement.innerText;
            removeBackgroundColor(getLastKeyText);
        }
    }

}
// capture keyboard button press
document.addEventListener('keyup', keyboardBtnPress);


// display score
/* function replay(){
    const getFinalScoreSection = document.getElementById('score-section');
    const getHomeSection = document.getElementById('home-section');
    const newScore = keyboardBtnPress();
    console.log('uuuuu', newScore)

} */