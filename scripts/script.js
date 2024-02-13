
function halfAndTwoInputMultiplication(inputField1, inputField2, put){
    const baseInput = document.getElementById(inputField1);
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base)

    const heightInput = document.getElementById(inputField2);
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    const areaCalculation = 0.5 * base * height;
    const puttingArea = document.getElementById(put);
    puttingArea.innerText = areaCalculation;

}

function piAndTwoInputMultiplication(inputField1, inputField2, put){
    const baseInput = document.getElementById(inputField1);
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base)

    const heightInput = document.getElementById(inputField2);
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    const areaCalculation = base * height;
    const puttingArea = document.getElementById(put);
    puttingArea.innerText = areaCalculation;

}
function piAndTwoInputMultiplication(inputField1, inputField2, put){
    const baseInput = document.getElementById(inputField1);
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base)

    const heightInput = document.getElementById(inputField2);
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    const areaCalculation = Math.PI * base * height;
    const puttingArea = document.getElementById(put);
    puttingArea.innerText = areaCalculation.toFixed(3);

}
