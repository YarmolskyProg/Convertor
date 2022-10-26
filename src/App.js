import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Block } from './Block';
import './index.scss';
export const defaultCurrencies = ['UAH', 'USD', 'EUR', 'GBP'];
let api = 'https://cdn.cur.su/api/nbu.json'
let instance = axios.create({
  baseURL: api
})
function App() {
  const [list, setlist] = useState({});
  const [USD, setUSD] = useState(0);
  const [EUR, setEUR] = useState(0);
  useEffect(() => {
    instance.get().then(res => {
      setlist(res.data.rates)
      setUSD(res.data.rates.UAH.toFixed(3))
      setEUR((1 / res.data.rates.EUR * res.data.rates.UAH).toFixed(3))
    }
    )

  }, []);
  const [currency, setcurrency] = useState('UAH');
  const [exchange, setexchange] = useState('UAH');
  const [valuecur, setvaluecur] = useState('');
  const [valueexc, setvalueexc] = useState('');

  function onChangecur(e) {
    let price = e / list[currency]
    let result = price * list[exchange]
    setvaluecur(e)

    setvalueexc(result.toFixed(3))

  }
  function onChangeexc(e) {

    let price = e * (list[currency] / list[exchange])
    setvalueexc(e)
    setvaluecur(price.toFixed(3))
  }
  useEffect(() => {
    onChangecur(valuecur)
  }, [currency]);
  useEffect(() => {
    onChangeexc(valueexc)
  }, [exchange]);
  return (
    <>
      <div>
        <p>USD - {USD} </p>
        <p>EUR - {EUR}</p>
      </div>
      <div className="App">
        <Block value={valuecur} currency={currency} onChangeValue={onChangecur} onChangeCurrency={setcurrency} />
        <Block value={valueexc} currency={exchange} onChangeValue={onChangeexc} onChangeCurrency={setexchange} />
      </div>
    </>
  );
}

export default App;
