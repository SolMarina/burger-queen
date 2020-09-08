import React, { useState } from 'react';
import styles from './Sign-in.module.css';

import {
  Link
} from "react-router-dom";

import UserName from './Nombre';

const SignInView = () => {


  return (
    <div className={styles.container}>
      <div className={styles.imglogin}>
        <img src="img/img-login.jpg" className={styles.loginimg} alt="" />
      </div>
      <div className={styles.signin}>
        <div className={styles.logosignin}>
          <img src="img/logo.png" className={styles.logo} alt="" />
        </div>
        <UserName/>
        <div>
          <div className={styles.buttonlink}><Link to="/waiter">Waiter</Link></div>
          <div className={styles.buttonlink}><Link to="/chef">Chef</Link></div>
        </div>
      </div>
    </div>
  );
}

export default SignInView;