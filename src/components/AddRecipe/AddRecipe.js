import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as recipesAcion from '../../actions/recipesActions';

class AddRecipe extends Component {
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
    this.props.dispatch(recipesAcion.addRecipe(this.state.recipes));
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

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps)(AddRecipe);

AddRecipe.propTypes = {
  dispatch: PropTypes.func
};
