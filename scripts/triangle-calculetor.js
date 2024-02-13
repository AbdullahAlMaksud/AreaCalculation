/**
 * অবজেক্টিভঃ ত্রিভুজের ভূমি ও উচ্চতা নিতে হবে। এরপর সেটা ব্যবহার করে সূত্রের মাধ্যমে ক্যালকুলেশন করে একটা ফলাফল দেখাতো হবে।
 * step - 1: get base value of the triangle.
 * step -2: added an id in the base input field
 * step -3: use getElementById to access the input field
 * step -4: get value from the input field. (value is string now)
 * step - 5: convert the value to a number. use parseInt() Function
 */

function calculateTriangleArea() {
    // console.log('Ami Aschi bhai')

    //get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBase = parseFloat(triangleBaseText);
    // get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleHeightText);
    //Calculate triangle Area
    const triangleArea = 0.5 * triangleBase * triangleHeight;

    //Display Triangle Area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;


    console.log('ত্রিভূজের ভূমি', triangleBase);

    console.log('ত্রিভূজের উচ্চতা', triangleHeight)

    console.log('ত্রিভূজের ক্ষেত্রফল', triangleArea)
}