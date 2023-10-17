// script.js
const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const marla = parseFloat(document.getElementById('marla').value);
    const squareFeet = marla * 272.25;   // as 1 Marla = 272.25 Square Feet
    resultDiv.textContent = `${marla} Marla is equal to ${squareFeet} Square Feet.`;
});
