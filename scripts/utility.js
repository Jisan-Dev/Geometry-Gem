const getInputValueById = (elmId) => {
  const valueText = document.getElementById(elmId).value;
  const value = parseFloat(valueText);
  return value;
};
