function calculateRectangleArea(){
    //get rectangle length
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    //get rectangle width
    const lengthInput = document.getElementById('rectangle-length')
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // Calculation
    const rectangleArea = width*length;
    console.log(rectangleArea);
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText= rectangleArea;
}