import React from 'react';
import { mount } from 'enzyme';
import App from '../src/App';

describe('the App', () => {
  it('should render', () => {
    expect(mount(<App />).exists()).toBe(true);
  });
});
