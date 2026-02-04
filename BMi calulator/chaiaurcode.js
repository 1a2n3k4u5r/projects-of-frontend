document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  // Getting height value here will be empty because the form is not submitted yet
  // const height = parseInt(document.querySelector('#height').value)
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = Number(document.querySelector('#height').value);
    const weight = Number(document.querySelector('#weight').value);
    const results = document.querySelector('#result');

    if (isNaN(height) || height <= 0) {
      results.innerHTML = `Please give a valid height greater than zero.`;
    } else if (isNaN(weight) || weight <= 0) {
      results.innerHTML = `Please provide a valid weight greater than zero.`;
    } else {
      // BMI = weight (kg) / (height (m) * height (m))
      // height is in cm, so convert to meters: height / 100
      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      // show the result
      results.innerHTML = `<span class="bmi-result">${bmi}</span>`;
      results.innerHTML = `<span class="bmi-result">${bmi}</span>`;
    }
  });
});