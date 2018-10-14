import React from 'react';
import renderer from 'react-test-renderer';
import { Planner } from './Planner.js';

describe('Planner', () => {
  it('should match snapshot', () => {
    const planner = renderer
      .create(<Planner />)
      .toJSON();

    expect(planner).toMatchSnapshot();
  });
});
