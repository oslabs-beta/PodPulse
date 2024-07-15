import React from 'react'
import { Link } from 'react-router-dom';
import * as styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={`${styles.header} barlow m regular`}>
      <div>
        Logo
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
            <Link>Menu Item 1</Link>
            </li>
            <li>
            <Link>Menu Item 2</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}