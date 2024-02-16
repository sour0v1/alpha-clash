// hide element by function
function hideElementById(elmentId) {
    const getElement = document.getElementById(elmentId);
    getElement.classList.add('hidden');
}
// show element by function
function showElementById(elementId) {
    const getElement = document.getElementById(elementId);
    getElement.classList.remove('hidden');
}

// create background color to key by function
function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// remove background color from key 
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// create random alphabet
function getRandomAlphabet() {
    // create array of alphabet
    const stringAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const arrayOfAlphabet = stringAlphabet.split('');
    // create random index between 0 - 25
    const randomNumber = Math.random() * 25;
    const indexNumber = Math.round(randomNumber);

    const randomAlphabet = arrayOfAlphabet[indexNumber];
    return randomAlphabet;
}