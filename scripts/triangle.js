const calculateTriangleArea = () => {
  // const triangleBaseValue = document.getElementById('triangle-base').value;
  const triangleBase = getInputValueById('triangle-base');

  // const triangleHeightValue = document.getElementById('triangle-height').value;
  const triangleHeight = getInputValueById('triangle-height');

  const triangleArea = 0.5 * triangleBase * triangleHeight;
  document.getElementById('triangle-area').innerText = triangleArea;

  resetInputsById('triangle-base');
  resetInputsById('triangle-height');

  insertHtml('Triangle', triangleArea);
};
