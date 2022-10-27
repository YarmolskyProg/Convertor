import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrencies } from '../redux/actions';
export const Block = ({ value, onChangeValue, onChangeCurrency }) => {
  let dispatch = useDispatch()
  let defaultCurrencies = useSelector(state => {
    return state.currencies.currencies
  })
  useEffect(() => {
    dispatch(loadCurrencies())
  }, []);
  return (
    <div className="block">
      <select >
        {defaultCurrencies.map((cur) => (
          <option key={cur} onClick={() => onChangeCurrency(cur)} value={cur}>{cur}</option>
        ))}
      </select>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        min={0}
        placeholder={0}
      />
    </div>)
}
