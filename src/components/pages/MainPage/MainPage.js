import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MainPage extends Component {
  render() {
    return (
      <div>
        <h2>MainPage</h2>
        <Link to='/diagram' className='btn-default btn-link' >Fit Diagram</Link>
      </div>
    );
  }
};
