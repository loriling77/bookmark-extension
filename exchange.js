const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const API_KEY =""
const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";

convert.addEventListener('click', () => {
    const amountTotal = parseFloat(amount.value);
    const currencyTotal = currency.value;
    const url = apiUrl+currencyTotal
fetech(url,{
    heaqders: {
        'X-API-Key': API_KEY
    }
})
.then(response = response.json())
.then(data =>{
    const rate = data.rates;
    const result = amountTotal * rate;
    result.innerHTML = `${amount} ${currency} = ${result.toFixed(2)} USD`;
})
.catch(error =>{
    console.error('Request failed:', error);
    result.innerHTML = 'Failed to fetch exchange rate. Please try again later.';
})
})