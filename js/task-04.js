'use strict'
const btnPlusEl = document.querySelector('[data-action="increment"]');
const btnMinusEl = document.querySelector('[data-action="decrement"]');
const counterEl = document.querySelector('#value')
let counterValue = 0;
btnPlusEl.addEventListener('click', () => {
counterValue += 1;
counterEl.textContent = String(counterValue);
    
})
btnMinusEl.addEventListener("click", () => {
    counterValue -= 1;
    counterEl.textContent = String(counterValue);
 });

