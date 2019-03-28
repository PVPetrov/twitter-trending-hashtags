import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

const Title = ({ title = '', classes = '' }) => (
  <div className={classNames('title', classes)}>
    <h2 className='rock-salt'>{title}</h2>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default Title;
