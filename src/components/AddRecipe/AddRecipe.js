import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecipe } from '../../actions/recipesActions';

class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: {
        name: ''
      }
    };
  }

  changeHandler = (value) => {
    this.setState(prevState => (
      { ...prevState, recipe: { name: value } }
    ));
  }

  clickHandler = (e) => {
    this.props.addRecipe(this.state.recipe);
  }

  recipeRow(recipe, index) {
    return <div key={index}>{recipe.name}</div>;
  }

  render() {
    return (
      <div>
        <h2>Add recipe</h2>
        {this.props.recipes.map(this.recipeRow)}
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

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

const mapDispatchToProps = dispatch => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);

AddRecipe.propTypes = {
  recipes: PropTypes.array.isRequired,
  addRecipe: PropTypes.func
};
