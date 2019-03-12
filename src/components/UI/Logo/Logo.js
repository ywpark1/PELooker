import React from 'react';

import logoImage from '../../../assets/images/logo-transparent.png';
import styles from './Logo.module.css';

const logo = props => (
  <div className={styles.Logo}>
    <img src={logoImage} alt="PELooker Logo" />
  </div>
);

export default logo;
