/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [numInput, setNumInput] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const newNumber = calculate(numInput, e.target.innerText);
    setNumInput(newNumber);
  };

  return (
    <div className="calculator">
      <div className="calculator__display">
        {numInput.next || numInput.total || numInput.operation || 0}
      </div>
      <div className="buttons">
        <div className="buttons__row">
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            AC
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            +/-
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            %
          </button>
          <button
            type="button"
            className="buttons__button button--orange"
            onClick={handleClick}>
            ÷
          </button>
        </div>
        <div className="buttons__row">
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            7
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            8
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            9
          </button>
          <button
            type="button"
            className="buttons__button button--orange"
            onClick={handleClick}>
            x
          </button>
        </div>
        <div className="buttons__row">
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            4
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            5
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            6
          </button>
          <button
            type="button"
            className="buttons__button button--orange"
            onClick={handleClick}>
            -
          </button>
        </div>
        <div className="buttons__row">
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            1
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            2
          </button>
          <button
            type="button"
            className="buttons__button"
            onClick={handleClick}>
            3
          </button>
          <button
            type="button"
            className="buttons__button button--orange"
            onClick={handleClick}>
            +
          </button>
        </div>
        <div className="buttons__row bottom">
          <button
            type="button"
            className="buttons__button button--zero"
            onClick={handleClick}>
            0
          </button>
          <button
            type="button"
            className="buttons__button dot"
            onClick={handleClick}>
            .
          </button>
          <button
            type="button"
            className="buttons__button equal button--orange"
            onClick={handleClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
