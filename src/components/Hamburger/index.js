import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

const Hamburger = ({ classes = '', action = null }) => (
  <div className={classNames('hamburger', classes)}
    onClick={action}>
    <img className="hamburger" src="assets/img/menu.png" alt="Menu" />
  </div>
);

Hamburger.propTypes = {
  classes: PropTypes.string,
  action: PropTypes.func.isRequired,
}

export default Hamburger;
