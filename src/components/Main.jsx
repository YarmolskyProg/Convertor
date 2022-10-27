import React, { useEffect, useState } from 'react'
import { Block } from './Block'
function Main({ loading, data }) {
    let list = null
    if (!loading) {
        list = data.rates
    }
    const [currency, setcurrency] = useState('UAH')
    const [exchange, setexchange] = useState('UAH')
    const [valuecur, setvaluecur] = useState(0)
    const [valueexc, setvalueexc] = useState(0)

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
        if (!loading) {
            onChangecur(valuecur)
        }
    }, [currency])
    useEffect(() => {
        if (!loading) {
            onChangeexc(valueexc)
        }
    }, [exchange])
    return (
        <div className="App" >
            <Block value={valuecur} currency={currency} onChangeValue={onChangecur} onChangeCurrency={setcurrency} />
            <Block value={valueexc} currency={exchange} onChangeValue={onChangeexc} onChangeCurrency={setexchange} />
        </div>
    )
}
export default Main