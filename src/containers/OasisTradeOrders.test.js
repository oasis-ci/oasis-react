/* global shallow describe it expect */
/* eslint-disable import/first */
import React from 'react';
import Immutable from 'immutable';

import {
  OasisTradeOrdersWrapper,
  mapStateToProps,
  mapDispatchToProps,
} from './OasisTradeOrders';
import { shallow } from 'enzyme';

describe('(Container) OasisTradeOrders', () => {
  const state = Immutable.fromJS({
    tokens: {
      activeTradingPair: {
        baseToken: 'MKR',
        quoteToken: 'W-ETH'
      }
    },
    trades: {
      marketHistory: []
    }
  });
  const initialProps = mapStateToProps(state);
  const initialActions = mapDispatchToProps(x => x);
  const props = {
    ...initialActions,
    ...initialProps
  };

  it('will receive right props', () => {
    expect(initialProps).toMatchSnapshot();
  });

  it('will receive right actions', () => {
    expect(initialActions).toMatchSnapshot();
  });

  it('should render', () => {
    const wrapper = shallow(
      <OasisTradeOrdersWrapper {...props}/>,
    );
    expect(wrapper).toMatchSnapshot();
  });

});
