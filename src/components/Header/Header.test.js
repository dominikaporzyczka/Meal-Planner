import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './Header.js';

describe('Header', () => {
  it('should match snapshot', () => {
    const header = renderer
      .create(
        <Router>
          <Header />
        </Router>
      ).toJSON();

    expect(header).toMatchSnapshot();
  });
});
