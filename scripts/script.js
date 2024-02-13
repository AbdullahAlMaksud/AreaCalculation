
function halfAndTwoInputMultiplication(inputField1, inputField2, put) {
    const baseInput = document.getElementById(inputField1);
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    // console.log(base)

    const heightInput = document.getElementById(inputField2);
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    // console.log(height);

    const areaCalculation = 0.5 * base * height;
    const puttingArea = document.getElementById(put);
    puttingArea.innerText = areaCalculation;

    var myVariable = 'Hello';
    var myText = ' World!';
    var newText = document.createTextNode(myVariable + myText);


    const AreaResult = areaCalculation;
    const AreaText = 'This Area is: '
    const result = document.createElement('p');
    result.innerText = AreaText+AreaResult;
    document.getElementById('resut-add-here').appendChild(result);
}

function twoInputMultiplication(inputField1, inputField2, put) {
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

    const AreaResult = areaCalculation;
    const AreaText = 'This Area is: '
    const result = document.createElement('p');
    result.innerText = AreaText+AreaResult;
    document.getElementById('resut-add-here').appendChild(result);

}
function piAndTwoInputMultiplication(inputField1, inputField2, put) {
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


    const AreaResult = areaCalculation;
    const AreaText = 'This Area is: '
    const result = document.createElement('p');
    result.innerText = AreaText+AreaResult;
    document.getElementById('resut-add-here').appendChild(result);

}
