import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export const LinkBtn = props => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // the above filters out props that don't matter to button
    ...rest
  } = props;
  return (
    <button
      {...rest}
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    />
  );
};

LinkBtn.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default withRouter(LinkBtn);
