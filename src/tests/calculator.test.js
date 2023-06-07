import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/calculator';

it('test_calculator_displays_initial_value', () => {
  const calculator = render(<Calculator />);

  expect(
    calculator.container.querySelector('.calculator__display').innerHTML,
  ).toBe('0');
});

it('test_calculator_updates_display_on_button_click', () => {
  const calculator = render(<Calculator />);
  const display = calculator.container.querySelector('.calculator__display');

  fireEvent.click(calculator.getByText('1'));
  fireEvent.click(calculator.getByText('+'));
  fireEvent.click(calculator.getByText('2'));
  fireEvent.click(calculator.getByText('='));
  expect(display.innerHTML).toBe('3');
});

it('test_calculator_clears_display_on_AC_click', () => {
  const calculator = render(<Calculator />);
  const display = calculator.container.querySelector('.calculator__display');

  fireEvent.click(calculator.getByText('1'));
  fireEvent.click(calculator.getByText('AC'));
  expect(display.innerHTML).toBe('');
});
