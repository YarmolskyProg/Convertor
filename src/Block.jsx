import React from 'react';
import { defaultCurrencies } from './App';
export const Block = ({ value, onChangeValue, onChangeCurrency }) => (
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
  </div>
);
