import React from 'react';
import { render } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom/extend-expect';

describe('Button', () => {
  it('renders Button component', () => {
    const tree = render(
      <Button button={{ id: 1, name: 'AC', classes: 'buttons__button' }} handleClick={() => {}} />,
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Button component with props', () => {
    const component = render(
      <Button button={{ id: 1, name: 'AC', classes: 'buttons__button' }} handleClick={() => {}} />,
    );
    const ac = component.getByText('AC');
    expect(ac).toBeInTheDocument();
  });
});
