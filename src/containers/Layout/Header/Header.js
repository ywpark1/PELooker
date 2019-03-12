import React from 'react';

import styles from './Header.module.css';

import Logo from '../../../components/UI/Logo/Logo';
import NavItems from '../../../components/NavItems/NavItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const header = props => (
  <header className={styles.Header}>
    {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default header;
