const rangeControls = document.querySelector('.range-controls');

if (rangeControls) {
noUiSlider.create(rangeControls, {
  start: [0, 150000],
  connect: true,
  step: 1,
  range: {
      'min': 0,
      'max': 150000
  }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  rangeControls.noUiSlider.on('update', function (values, handle){
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeControls.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
    setRangeSlider(index, e.currentTarget.value);
    });
  });
}
