import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Title from '../components/Title';

const Header = () => (
  <Fragment>
    <Title title='#hashtags' classes='flex-auto' />
  </Fragment>
)

Header.propTypes = {
  toggleOpened: PropTypes.func.isRequired,
}

export default Header;
