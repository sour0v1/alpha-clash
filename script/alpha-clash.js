// function play(){
//     const getHome = document.getElementById('home-section');
//     const getPlayground = document.getElementById('playground-section');
//     getHome.classList.add('hidden');
//     getPlayground.classList.remove('hidden');
//     // console.log(getPlayground.classList);
// }
function play(){
    hideElementById('home-section');
    addElementById('playground-section');
    const storeRandom = getRandom('display');
    addBack(storeRandom);
}
