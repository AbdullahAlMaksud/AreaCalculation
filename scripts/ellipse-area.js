function calculateEllipseArea(){
    const majorRadius = getInputValueById ('ellipse-minor-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');
    const area = (Math.PI * majorRadius * minorRadius).toFixed(3);
    setInnerTextById('ellipse-area', area);
}