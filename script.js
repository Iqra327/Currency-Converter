import { countries } from "./data/countries.js";

const fromAmountElement = document.querySelector('.js-input-amount');
const fromCurrencyElement = document.querySelector('.js-from-currency');
const toAmountElement = document.querySelector('.js-to-amount');
const toCurrencyElement = document.querySelector('.js-to-currency');
const resultElement = document.querySelector('.js-currency-result');

countries.forEach((country) => {
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');

  option1.value = option2.value =  country.code;
  option1.textContent = option2.textContent = `${country.code} (${country.name})`;

  fromCurrencyElement.appendChild(option1);
  toCurrencyElement.appendChild(option2);

  //default values of select tag
  fromCurrencyElement.value = 'USD';
  toCurrencyElement.value = 'PKR';
})