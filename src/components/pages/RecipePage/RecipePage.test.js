import React from 'react';
import renderer from 'react-test-renderer';
import { RecipePage } from './RecipePage.js';

describe('RecipePage', () => {
  it('should match snapshot', () => {
    const recipePage = renderer
      .create(<RecipePage />)
      .toJSON();

    expect(recipePage).toMatchSnapshot();
  });
});
