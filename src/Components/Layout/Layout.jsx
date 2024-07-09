import React from 'react';
import { Outlet } from 'react-router-dom';
import * as styles from './Layout.module.scss';
import Header from '../Header/Header.jsx';

export default function Layout() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Outlet />
      <footer className={`${styles.footer} barlow sm regular` }>
        <p>© 2024 PodPulse </p>
      </footer>
    </div>
  );
};