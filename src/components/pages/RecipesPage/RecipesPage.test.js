import React from 'react';
import renderer from 'react-test-renderer';
import { RecipesPage } from './RecipesPage.js';

describe('RecipesPage', () => {
  it('should match snapshot', () => {
    const recipesPage = renderer
      .create(<RecipesPage />)
      .toJSON();

    expect(recipesPage).toMatchSnapshot();
  });
});
