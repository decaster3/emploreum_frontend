import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import HomePage from '../index';
import messages from '../messages';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} values={{ name: 'qwe' }} />
    )).toEqual(true);
  });
});

describe('<HomePage />', () => {
  it('should render the newM', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.newM} />
    )).toEqual(true);
  });
});
