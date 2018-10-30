import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class RecipesPage extends Component {
  render() {
    return (
      <div>
        <h2>RecipesPage</h2>
        <Link to="/recipes/add">Add recipe</Link>
      </div>
    );
  }
};
