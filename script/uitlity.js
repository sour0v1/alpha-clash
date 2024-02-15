function hideElementById(elementId){
    const getElement = document.getElementById(elementId);
    getElement.classList.add('hidden');
}
function addElementById(elementId){
    const getElement = document.getElementById(elementId);
    getElement.classList.remove('hidden');
}
function getRandom(elementId){
    const letter = 'abcdefghijklmnopqrstuvwxyz';
    const toArray = letter.split('');
    // console.log(toArray)
    const a = Math.random() * 25;
    const getConstant = Math.round(a);
    const final = toArray[getConstant];
    // console.log(getConstant);
    document.getElementById(elementId).innerText =  final;
    return final;
}

function addBack(ele){
    const getEle = document.getElementById(ele);
    getEle.style.backgroundColor = 'yellow';
}
