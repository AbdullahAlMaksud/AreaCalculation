const btn = document.querySelectorAll('.btn');
let count = 0;
for (const allButton of btn) {
    allButton.addEventListener('click', function (e) {
        const firstInput = e.target.parentNode.parentNode.children[2].children[0].children[0];
        const firstInputValue = parseFloat(firstInput.value);
        const secondInput = e.target.parentNode.parentNode.children[2].children[1].children[0];
        const secondInputValue = parseFloat(secondInput.value);
        const puttingArea = e.target.parentNode.parentNode.children[3].children[0].children[0];
        const parentName = e.target.parentNode.parentNode.children[0].innerText;
        let area = 0;

        const audio = new Audio("./images/click.wav");
        audio.play();


        if (parentName === 'Triangle' || parentName === 'Rhombus' || parentName === 'Pentagon') {
            area = 0.5 * firstInputValue * secondInputValue;
        }
        else if (parentName === 'Ellipse') {
            area = (Math.PI * firstInputValue * secondInputValue).toFixed(2);
        }
        else {
            area = firstInputValue * secondInputValue;
        }
        const resultContainer = document.getElementById('result-add-here');
        count = count + 1
        puttingArea.innerText = area;

        const areaInMeter = area / 10000;
        const list = document.createElement('div');
        list.innerHTML = `<div class="flex justify-between items-center text-lg mb-2">
        <p class = "w-[30%]">${count}. ${parentName}</p>
        <p class= "w-[40%] text-center"><span id="areaInMeterPlace${count}">${area} c</span>m<sup>2</sup></p>
        <button onclick="document.getElementById('areaInMeterPlace${count}').innerHTML=${areaInMeter}"  class="bg-blue-600 text-white px-2 py-1 rounded-md w-[30%]">Convert to m<sup>2</sup></button>
        </div>`
        resultContainer.appendChild(list);
    })
}