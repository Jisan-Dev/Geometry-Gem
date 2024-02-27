const calculatePentagonArea = () => {
  const pentagonP = getInputValueById('pentagon-p');
  const pentagonD = getInputValueById('pentagon-d');

  const pentagonArea = 0.5 * pentagonP * pentagonD;
  document.getElementById('pentagon-area').innerText = pentagonArea;

  resetInputsById('pentagon-p');
  resetInputsById('pentagon-d');

  insertHtml('Pentagon', pentagonArea);
};
