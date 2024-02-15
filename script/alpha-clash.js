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
    hideElementById('home-section');
    showElementById('playground-section');
    continueGame();

}