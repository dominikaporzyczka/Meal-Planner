import React from 'react';
import renderer from 'react-test-renderer';
import { MyGoalsPage } from './MyGoalsPage.js';

describe('MyGoalsPage', () => {
  it('should match snapshot', () => {
    const myGoalsPage = renderer
      .create(<MyGoalsPage />)
      .toJSON();

    expect(myGoalsPage).toMatchSnapshot();
  });
});
