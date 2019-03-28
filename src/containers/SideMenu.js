import React from 'react';
import Menu from '../components/Menu';
import { countries } from '../utils/countries';

const SideMenu = () => {
  return <Menu list={countries} />
}

export default SideMenu;
