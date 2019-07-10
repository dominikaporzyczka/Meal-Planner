import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';

export class Header extends Component {
  render() {
    return (
      <nav>
        <NavLink to='/' className="nav-link">Logo</NavLink>
        <NavLink to='/activities' className="nav-link">My Activities</NavLink>
        <NavLink to='/goals' className="nav-link">My Goals</NavLink>
        <NavLink to='/reports' className="nav-link">Progress Reports</NavLink>
      </nav>
    );
  }
};
