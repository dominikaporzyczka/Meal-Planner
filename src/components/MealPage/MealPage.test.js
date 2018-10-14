import React from 'react';
import renderer from 'react-test-renderer';
import { MealPage } from './MealPage.js';

describe('MealPage', () => {
  it('should match snapshot', () => {
    const mealPage = renderer
      .create(<MealPage />)
      .toJSON();

    expect(mealPage).toMatchSnapshot();
  });
});
