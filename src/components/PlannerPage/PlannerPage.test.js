import React from 'react';
import renderer from 'react-test-renderer';
import { PlannerPage } from './PlannerPage.js';

describe('PlannerPage', () => {
  it('should match snapshot', () => {
    const planner = renderer
      .create(<PlannerPage />)
      .toJSON();

    expect(planner).toMatchSnapshot();
  });
});
