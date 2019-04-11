import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <div className="header">
        <ul>
          <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
          <li><NavLink to="/create" activeClassName="is-active">Create</NavLink></li>
          <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
        </ul>
      </div>
    </header>
  )
};

export default Header;