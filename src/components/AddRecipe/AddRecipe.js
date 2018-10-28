import React, { Component } from 'react';

export class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {
        name: null
      }
    };
  }

  changeHandler = (value) => {
    this.setState(prevState => (
      { ...prevState, recipe: { name: value } }
    ));
  }

  clickHandler = (e) => {
    alert(`${this.state.recipe.name} added`);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Add recipe</h2>
        <input
          type="text"
          onChange={(event) => this.changeHandler(event.target.value)}
          value={this.state.recipe.name}
        />
        <button
          type="submit"
          onClick={this.clickHandler}
        >
          Add
        </button>
      </div>
    );
  }
};
