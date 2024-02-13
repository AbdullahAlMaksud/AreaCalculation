// function calculateParallelogramArea(){
//     // const baseInput = document.getElementById('parallelogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText)
//     // console.log(base);
//     const base = getParallelogramBase()
//     console.log(base)
// }


// function getParallelogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText)
//     return base;
// }

function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
    setInnerTextById('parallelogram-area', area)
}


function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

