import React from 'react'
import * as styles from './ContainersDashboard.module.scss';

export default function ContainersDashboard() {
  return (
    <div className={styles.mainContainer}>
      <h1>my-app</h1>
      <p>12345678-12345</p>
      <div className={styles.containersTable}>

      </div>
    </div>
  )
}
