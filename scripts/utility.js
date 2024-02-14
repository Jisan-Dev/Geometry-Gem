const getInputValueById = (elmId) => {
  const valueText = document.getElementById(elmId).value;
  const value = parseFloat(valueText);
  return value;
};

const resetInputsById = (elemId) => {
  const elem = document.getElementById(elemId);
  elem.value = '';
};
