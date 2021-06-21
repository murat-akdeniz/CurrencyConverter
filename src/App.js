import Currency from "./components/Currency"
import React, { useState, useEffect } from "react"


const BASE_URL = 'https://api.exchangerate.host/latest'




function App() {

  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);

  console.log(`from ${fromCurrency} to: ${toCurrency} exchangerate: ${exchangeRate}`)



  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(Object.keys(data.rates).length)
        var key = Object.keys(data.rates).sort(function order(key1, key2) {
          if (key1 < key2) return -1;
          else if (key1 > key2) return +1;
          else return 0;
        });

        // Taking the object in 'temp' object
        // and deleting the original object.
        var temp = {};
        for (var i = 0; i < key.length; i++) {
          temp[key[i]] = data.rates[key[i]];
          delete data.rates[key[i]];
        }

        for (i = 0; i < key.length; i++) {
          data.rates[key[i]] = temp[key[i]];
        }
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);//all rates keys
        setFromCurrency(data.base);//anlık para birimini yakalama
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);

      })

  }, [])


  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency])



  function handleFromAmountChange(e) {
    setAmount(e.target.value);
  }

  return (
    <Currency
      currencyOptions={currencyOptions}
      selectedCurrency={fromCurrency}
      onChangeCurrency={(e) => setFromCurrency(e.target.value)}
      onChangeAmount={handleFromAmountChange}
      amount={amount}
      curr={toCurrency}
      onChangeToCurrency={(e) => setToCurrency(e.target.value)}
      toAmount={amount * exchangeRate}
    />
  )

}

export default App

