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

//function for fetching data

async function exchangeRates(){
  const amount = parseFloat(fromAmountElement.value);
  const fromCurrency = fromCurrencyElement.value;
  const toCurrency = toCurrencyElement.value;  

  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/e402f28ace1114ed6d4c923a/latest/${fromCurrency}`
  );
  const data = await response.json();
  const rates = data.conversion_rates[toCurrency];
  const convertedAmount = (amount * rates).toFixed();
  toAmountElement.value = convertedAmount;
  
  resultElement.textContent = `${amount} ${fromCurrency} = ${toAmountElement.value} ${toCurrency}`;
}

fromAmountElement.addEventListener('input', exchangeRates);




