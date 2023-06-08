import React from 'react';
import { render } from '@testing-library/react';
import Quotes from '../components/quotes';

describe('Quotes', () => {
  it('renders Quotes component', () => {
    const tree = render(<Quotes />);
    expect(tree).toMatchSnapshot();
  });
});
