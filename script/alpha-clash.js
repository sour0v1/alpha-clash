// home section

// for pressing 'enter'
document.addEventListener('keyup', displayPlaygroundSection);

function displayPlaygroundSection(event) {
    const getEnterKey = event.key;
    const getPlaygroundSection = document.getElementById('playground-section');
    const getHomeSection = document.getElementById('home-section');
    if (getEnterKey === 'Enter') {
        getPlaygroundSection.classList.remove('hidden');
        getHomeSection.classList.add('hidden');
    }
} 
// for click the 'Play Now' button
const getHomePlayBtn = document.getElementById('home-btn');
getHomePlayBtn.addEventListener('click', displayPlaygroundSectionByClick);

function displayPlaygroundSectionByClick(){
    const getPlaygroundSection = document.getElementById('playground-section');
    const getHomeSection = document.getElementById('home-section');
    getPlaygroundSection.classList.remove('hidden');
        getHomeSection.classList.add('hidden');
}