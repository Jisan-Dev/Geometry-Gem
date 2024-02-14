const getInputValueById = (elmId) => {
  const valueText = document.getElementById(elmId).value;
  const value = parseFloat(valueText);
  return value;
};

const resetInputsById = (elemId) => {
  const elem = document.getElementById(elemId);
  elem.value = '';
};

const insertHtml = (name, result) => {
  const parent = document.getElementById('calc-history');
  const liChild = document.createElement('li');
  liChild.style.listStylePosition = 'inside';
  liChild.innerHTML = `
    <div class="inline-flex  w-[95%] mb-2">
      <div class="flex w-full justify-between">
       <span class="block"> ${name} - ${result}cm<sup>2</sup> </span> 
       <button class="bg-purple-600 p-[4px] text-sm block">Convert to m<sup>2</sup></button> 
      </div>
    </div>
  `;
  parent.appendChild(liChild);
};
