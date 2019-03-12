import React, { Component, Fragment } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import styles from './Layout.module.css';

class Layout extends Component {
  state = {
    // showSideDrawer: false
  };

  //   sideDrawerClosedHandler = () => {
  //     this.setState({ showSideDrawer: false });
  //   };

  //   sideDrawerToggleHandler = () => {
  //     this.setState(prevState => {
  //       return { showSideDrawer: !prevState.showSideDrawer };
  //     });
  //   };

  render() {
    return (
      <Fragment>
        <Header />
        <main className={styles.Layout}>
          <p>Hello</p>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
