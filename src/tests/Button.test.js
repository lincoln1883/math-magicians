import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
  it('renders Button component', () => {
    const tree = render(
      <Button button={{ id: 1, name: 'AC', classes: 'buttons__button' }} />,
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Button component with props', () => {
    render(
      <Button button={{ id: 1, name: 'AC', classes: 'buttons__button' }} />,
    );
    const element = screen.getByText('AC');
    expect(element).toBeInTheDocument();
  });
});