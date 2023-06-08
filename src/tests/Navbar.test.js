import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('renders Navbar component', () => {
    const tree = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Navbar component with props', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const element = screen.getByText('Math Magicians');
    expect(element).toMatchSnapshot();
  });
});
