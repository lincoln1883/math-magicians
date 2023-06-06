import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import Button from './Button';

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

  const buttons = [
    { id: 1, name: 'AC', class: 'buttons__button' },
    { id: 2, name: '+/-', class: 'buttons__button' },
    { id: 3, name: '%', class: 'buttons__button' },
    { id: 4, name: '÷', class: 'buttons__button button--orange' },
    { id: 5, name: '7', class: 'buttons__button' },
    { id: 6, name: '8', class: 'buttons__button' },
    { id: 7, name: '9', class: 'buttons__button' },
    { id: 8, name: 'x', class: 'buttons__button button--orange' },
    { id: 9, name: '4', class: 'buttons__button' },
    { id: 10, name: '5', class: 'buttons__button' },
    { id: 11, name: '6', class: 'buttons__button' },
    { id: 12, name: '-', class: 'buttons__button button--orange' },
    { id: 13, name: '1', class: 'buttons__button' },
    { id: 14, name: '2', class: 'buttons__button' },
    { id: 15, name: '3', class: 'buttons__button' },
    { id: 16, name: '+', class: 'buttons__button button--orange' },
    { id: 17, name: '0', class: 'buttons__button button--zero' },
    { id: 18, name: '.', class: 'buttons__button dot' },
    { id: 19, name: '=', class: 'buttons__button equal button--orange' },
  ];

  return (
    <div className="calculator">
      <div className="calculator__display">
        {numInput.next || numInput.total || numInput.operation || 0}
      </div>
      <div className="buttons">
        {buttons.map((button) => (
          <Button key={button.id} button={button} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
