import React from 'react';

import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css';

const navItems = props => (
  <ul className={styles.NavItems}>
    <NavItem link="/find" exact>
      Find
    </NavItem>
    <NavItem link="/create" exact>
      Create Event
    </NavItem>
  </ul>
);

export default navItems;
