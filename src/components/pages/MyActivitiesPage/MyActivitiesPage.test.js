import React from 'react';
import renderer from 'react-test-renderer';
import { MyActivitiesPage } from './MyActivitiesPage';

describe('MyActivitiesPage', () => {
  it('should match snapshot', () => {
    const myActivitiesPage = renderer
      .create(<MyActivitiesPage />)
      .toJSON();

    expect(myActivitiesPage).toMatchSnapshot();
  });
});
