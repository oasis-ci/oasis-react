/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';
import { shallow } from 'enzyme';
import TokenAmountInput from './TokenAmountInput';


describe('(Component) TokenAmountInput', () => {
  it('should render', () => {
    const props = {
      children: (
        <span>test</span>
      )
    };
    const wrapper = shallow(
      <TokenAmountInput {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
