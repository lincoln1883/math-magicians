import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [numInput, setNumInput] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const newNumber = calculate(numInput, e.target.textContent);
    setNumInput(newNumber);
  };

  const buttons = [
    { id: 1, name: 'AC', classes: 'buttons__button' },
    { id: 2, name: '+/-', classes: 'buttons__button' },
    { id: 3, name: '%', classes: 'buttons__button' },
    { id: 4, name: '÷', classes: 'buttons__button button--orange' },
    { id: 5, name: '7', classes: 'buttons__button' },
    { id: 6, name: '8', classes: 'buttons__button' },
    { id: 7, name: '9', classes: 'buttons__button' },
    { id: 8, name: 'x', classes: 'buttons__button button--orange' },
    { id: 9, name: '4', classes: 'buttons__button' },
    { id: 10, name: '5', classes: 'buttons__button' },
    { id: 11, name: '6', classes: 'buttons__button' },
    { id: 12, name: '-', classes: 'buttons__button button--orange' },
    { id: 13, name: '1', classes: 'buttons__button' },
    { id: 14, name: '2', classes: 'buttons__button' },
    { id: 15, name: '3', classes: 'buttons__button' },
    { id: 16, name: '+', classes: 'buttons__button button--orange' },
    { id: 17, name: '0', classes: 'buttons__button button--zero' },
    { id: 18, name: '.', classes: 'buttons__button dot' },
    { id: 19, name: '=', classes: 'buttons__button equal button--orange' },
  ];

  return (
    <div className="calculator">
      <div className="calculator__display">
        {numInput.total}
        {numInput.operation || ''}
        {numInput.next || ''}
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
