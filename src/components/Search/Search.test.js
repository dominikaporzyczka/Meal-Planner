import React from 'react';
import renderer from 'react-test-renderer';
import { Search } from './Search.js';

describe('Search', () => {
  it('should match snapshot', () => {
    const search = renderer
      .create(<Search />)
      .toJSON();

    expect(search).toMatchSnapshot();
  });
});
