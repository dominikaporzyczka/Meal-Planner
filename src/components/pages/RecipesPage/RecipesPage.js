import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/common.scss';

export class RecipesPage extends Component {
  render() {
    return (
      <div>
        <h2>RecipesPage</h2>
        <Link to='/recipes/add' className='btn-default btn-link'>Add recipe</Link>
      </div>
    );
  }
};
