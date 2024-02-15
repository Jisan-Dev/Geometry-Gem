const calculateRhombusArea = () => {
  const rhombusD1 = getInputValueById('rhombus-d1');
  const rhombusD2 = getInputValueById('rhombus-d2');

  const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
  document.getElementById('rhombus-area').innerText = rhombusArea;

  resetInputsById('rhombus-d1');
  resetInputsById('rhombus-d2');

  insertHtml('Rhombus', rhombusArea);
};
