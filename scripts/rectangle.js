const calculateRectangleArea = () => {
  const rectangleWidth = getInputValueById('rectangle-width');
  const rectangleLength = getInputValueById('rectangle-length');

  const rectangleArea = rectangleWidth * rectangleLength;
  document.getElementById('rectangle-area').innerText = rectangleArea;

  resetInputsById('rectangle-width');
  resetInputsById('rectangle-length');

  insertHtml('Rectangle', rectangleArea);
};
