import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

export class Header extends Component {
  render() {
    return (
      <nav>
        <NavLink to='/' className="nav-link">Logo</NavLink>
        <NavLink to='/recipes' className="nav-link">Recipes</NavLink>
        <NavLink to='/planner' className="nav-link">Your Meal Planner</NavLink>
      </nav>
    );
  }
};
