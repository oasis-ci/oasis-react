import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import ImmutablePropTypes from 'react-immutable-proptypes';

import styles from './OasisChart.scss';

const propTypes = PropTypes && {};
const defaultProps = {};

class OasisChart extends PureComponent {
  render() {
    return (
      <div className={styles.base}>
        OasisChart
      </div>
    );
  }
}

OasisChart.displayName = 'OasisChart';
OasisChart.propTypes = propTypes;
OasisChart.defaultProps = defaultProps;
export default OasisChart;
