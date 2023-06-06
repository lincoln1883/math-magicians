import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1, class: 'nav-item', path: '/', text: 'Home', symbol: ' |',
    },
    {
      id: 2, class: 'nav-item', path: '/calculator', text: 'Calculator', symbol: ' |',
    },
    {
      id: 3, class: 'nav-item', path: '/quotes', text: 'Quotes',
    },
  ];
  return (
    <nav className="nav-bar">
      <h1 className="nav-title">Math Magicians</h1>
      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink className={link.class} to={link.path}>
              {link.text}
              {link.symbol}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
