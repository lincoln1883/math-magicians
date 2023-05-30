import React from 'react';
import './calculator.css';

const Calculator = () => (
  <div className="calculator">
    <div className="calculator__display">0</div>
    <div className="buttons">
      <div className="buttons__row">
        <button type="button" className="buttons__button">
          AC
        </button>
        <button type="button" className="buttons__button">
          +/-
        </button>
        <button type="button" className="buttons__button">
          %
        </button>
        <button type="button" className="buttons__button button--orange">
          ÷
        </button>
      </div>
      <div className="buttons__row">
        <button type="button" className="buttons__button">
          7
        </button>
        <button type="button" className="buttons__button">
          8
        </button>
        <button type="button" className="buttons__button">
          9
        </button>
        <button type="button" className="buttons__button button--orange">
          x
        </button>
      </div>
      <div className="buttons__row">
        <button type="button" className="buttons__button">
          4
        </button>
        <button type="button" className="buttons__button">
          5
        </button>
        <button type="button" className="buttons__button">
          6
        </button>
        <button type="button" className="buttons__button button--orange">
          -
        </button>
      </div>
      <div className="buttons__row">
        <button type="button" className="buttons__button">
          1
        </button>
        <button type="button" className="buttons__button">
          2
        </button>
        <button type="button" className="buttons__button">
          3
        </button>
        <button type="button" className="buttons__button button--orange">
          +
        </button>
      </div>
      <div className="buttons__row">
        <button type="button" className="buttons__button button--zero">
          0
        </button>
        <button type="button" className="buttons__button dot">
          .
        </button>
        <button type="button" className="buttons__button equal button--orange">
          =
        </button>
      </div>
    </div>
  </div>
);
export default Calculator;
