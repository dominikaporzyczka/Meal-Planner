import React from 'react';
import renderer from 'react-test-renderer';
import { Footer } from './Footer.js';

describe('Footer', () => {
  it('should match snapshot', () => {
    const footer = renderer
      .create(<Footer />)
      .toJSON();

    expect(footer).toMatchSnapshot();
  });
});
