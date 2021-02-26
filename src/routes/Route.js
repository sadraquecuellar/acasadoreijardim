import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';


export default function RouterWrapper({ isPrivate, ...rest }) {

  return <Route {...rest} />;
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};
