import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecipe } from '../../actions/recipesActions';

import { InputText } from '../common/InputText';

class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState(prevState => (
      { ...prevState, [name]: value }
    ));
  }

  handleSubmit = (e) => {
    this.props.addRecipe(this.state);

    e.preventDefault();
  }

  recipeRow(recipe, index) {
    return <div key={index}>{recipe.name}, {recipe.description}</div>;
  }

  render() {
    return (
      <div>
        <h2>Add recipe</h2>
        {this.props.recipes.map(this.recipeRow)}
        <form onSubmit={this.handleSubmit}>
          <InputText
            label='Name'
            id='recipe-name'
            name='name'
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <InputText
            label='Description'
            id='recipe-description'
            name='description'
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <button type="submit"> Add Recipe </button>
        </form>
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
