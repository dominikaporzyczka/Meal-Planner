import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './addRecipe.scss';
import '../../styles/common.scss';

import { categories } from '../../categories-data';
import { ingredients } from '../../ingredients-data';
import { addRecipe } from '../../actions/recipesActions';
import { Dropdown } from '../Dropdown/Dropdown';

class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      ingredients: [],
      categories: []
    };
  }

  get categoriesValue() {
    return categories.map(category => category.value).sort();
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

  onSelectCategory = (category) => {
    console.log('click');
    this.setState(prevState => ({
      ...prevState,
      categories: [...prevState.categories, category]
    }));
  }

  render() {
    return (
      <div>
        <h2>Add recipe</h2>
        {this.props.recipes.map(this.recipeRow)}
        <form onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <label htmlFor='recipe-name'>Name</label>
            <input
              type='text'
              id='recipe-name'
              name='name'
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-row'>
            <Dropdown options={this.categoriesValue} label='categories' onSelectCategory={this.onSelectCategory}/>
          </div>
          <div>{this.state.categories}</div>
          <div className='form-row'>
            <label htmlFor='recipe-description'>Recipe</label>
            <textarea
              id='recipe-description'
              name='description'
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>
          <div className='form-row'>
            <label htmlFor='recipe-ingredients'>Ingredients</label>
            <select>
              {ingredients.map((ingredient, index) => {
                const name = ingredient.ingredient.name;
                return <option value={name} key={index}>{name}</option>;
              })}
            </select>
          </div>
          <button className='btn-submit btn-default' type="submit"> Add Recipe </button>
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
