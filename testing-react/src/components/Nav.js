import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import StyledNav from './styled/StyledNav';
import NavItem from './styled/NavItem';

const navItems = [
  {
    id: 1,
    to: '/',
    text: 'Home',
  },
  {
    id: 2,
    to: '/counter',
    text: 'Counter',
  },
  {
    id: 3,
    to: '/fetch-example',
    text: 'Fetch Example',
  },
  {
    id: 4,
    to: '/form',
    text: 'Multipage Form',
  },
];

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      {navItems.map(nav => (
        <NavItem key={nav.id} active={nav.to === pathname}>
          <Link to={nav.to}>{nav.text}</Link>
        </NavItem>
      ))}
    </StyledNav>
  );
};

export default Nav;
