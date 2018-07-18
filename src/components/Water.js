import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Water extends Component {
  static propTypes = {
    isFlowing: PropTypes.bool,
  }

  render() {
    const waterClassnames = classNames('Aqua', {
      'flowing': this.props.isFlowing
    });
    return (
      <div className={waterClassnames} />
    )
  }
}

export default Water;