import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

describe('Layout', () => {
  it('renders Layout component', () => {
    const tree = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('renders Layout component with props', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );
    const element = screen.getByText('Math Magicians');
    expect(element).toMatchSnapshot();
  });
});