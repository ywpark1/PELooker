import React from 'react';

import styles from './Footer.module.css';

import Logo from '../../../components/UI/Logo/Logo';

const footer = props => (
  <footer className={styles.Footer}>
    {/* <div className={styles.Logo}>
      <Logo />
    </div> */}
    <div className={styles.Copyright}>
      <p>&copy; {new Date().getFullYear()} - Yeon Woo Park</p>
    </div>
  </footer>
);

export default footer;
