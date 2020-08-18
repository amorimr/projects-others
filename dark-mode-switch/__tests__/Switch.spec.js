import React from 'react';
import { mount } from 'enzyme';
import Switch from '../src/Switch';

describe('the switch component', () => {
  afterEach(() => {
    window.localStorage.removeItem('dark-mode');
  });

  it('renders a checkbox', () => {
    const wrapper = mount(<Switch />);
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
  });

  it('should get its initial state from the local storage', () => {
    const getItem = jest.spyOn(Storage.prototype, 'getItem');
    window.localStorage.setItem('dark-mode', 'dark');
    const wrapper = mount(<Switch />);
    expect(getItem).toHaveBeenCalledWith('dark-mode');
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(true);
  });

  it('toggles the mode onChange', () => {
    const wrapper = mount(<Switch />);
    expect(document.querySelectorAll('body.light').length).toEqual(1);
    expect(document.querySelectorAll('body.dark').length).toEqual(0);
    wrapper.find('input[type="checkbox"]').simulate('change');
    expect(document.querySelectorAll('body.light').length).toEqual(0);
    expect(document.querySelectorAll('body.dark').length).toEqual(1);
  });

  it('should update the local storage when onChange', () => {
    const wrapper = mount(<Switch />);
    wrapper.find('input[type="checkbox"]').simulate('change');
    expect(window.localStorage.getItem('dark-mode')).toBe('dark');
    wrapper.find('input[type="checkbox"]').simulate('change');
    expect(window.localStorage.getItem('dark-mode')).toBe('');
  });
});
