import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from './Header.js';

describe('Header', () => {
  it('should match snapshot', () => {
    const header = renderer
      .create(<Header />)
      .toJSON();

    expect(header).toMatchSnapshot();
  });
});
