const calculateTriangleArea = () => {
  // const triangleBaseValue = document.getElementById('triangle-base').value;
  const trinagleBase = getInputValueById('triangle-base');

  // const triangleHeightValue = document.getElementById('triangle-height').value;
  const triangleHeight = getInputValueById('triangle-height');

  const triangleArea = 0.5 * trinagleBase * triangleHeight;
  document.getElementById('triangle-area').innerText = triangleArea;
};
