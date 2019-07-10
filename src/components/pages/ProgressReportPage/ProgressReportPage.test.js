import React from 'react';
import renderer from 'react-test-renderer';
import { ProgressReportPage } from './ProgressReportPage.js';

describe('ProgressReportPage', () => {
  it('should match snapshot', () => {
    const progressReportPage = renderer
      .create(<ProgressReportPage />)
      .toJSON();

    expect(progressReportPage).toMatchSnapshot();
  });
});
