const calculateParallelogramArea = () => {
  const parallelogramBase = getInputValueById('parallelogram-base');
  const parallelogramHeight = getInputValueById('parallelogram-height');

  const parallelogramArea = parallelogramBase * parallelogramHeight;
  document.getElementById('parallelogram-area').innerText = parallelogramArea;
  resetInputsById('parallelogram-base');
  resetInputsById('parallelogram-height');
};
