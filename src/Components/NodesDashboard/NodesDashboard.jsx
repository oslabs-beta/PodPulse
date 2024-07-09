import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './NodesDashboard.module.scss';

export default function NodesDashboard() {
  const navigate = useNavigate();

  const goToPod = () => {
    navigate('/pod-dashboard')
  }

  return (
    <main className={styles.main}>
      
      <div className={styles.nodeContainer}>
        <h1 className={`${styles.h1} poppins lg regular`}><span className={styles.listItem}>Node Name:</span>node-1</h1>
        <div className={`${styles.podCardsContainer} barlow m regular`}>

          <div className={styles.podCard} onClick={goToPod}>
            <h2 className='barlow ml medium'><span className={styles.listItem}>Pod:</span>react-front-end</h2>
            <ul className='barlow xs regular'>
              <li><span className={styles.listItem}>Containers:</span>3</li>
              <li><span className={styles.listItem}>Last Restart:</span>Monday, Jan 08 2024 @ 08:24:03am</li>
              <li><span className={styles.listItem}>Last Restarted by:</span>Pablo Rosillo</li>
            </ul>
          </div>

          <div className={styles.podCard}>
            <h2 className='barlow ml medium'><span className={styles.listItem}>Pod:</span>express-server</h2>
            <ul className='barlow xs regular'>
              <li><span className={styles.listItem}>Containers:</span>2</li>
              <li><span className={styles.listItem}>Last Restart:</span>Today, Jan 10 2024 @ 02:05:49pm</li>
              <li><span className={styles.listItem}>Last Restarted by:</span>--</li>
            </ul>
          </div>

          <div className={styles.podCard}>
          <h2 className='barlow ml medium'><span className={styles.listItem}>Pod:</span>mongodb-database</h2>
            <ul className='barlow xs regular'>
              <li><span className={styles.listItem}>Containers:</span>1</li>
              <li><span className={styles.listItem}>Last Restart:</span>Monday, Jan 08 2024 @ 11:45:01am</li>
              <li><span className={styles.listItem}>Last Restarted by:</span>--</li>
            </ul>
          </div>
          <div className={styles.podCard}>
          <h2 className='barlow ml medium'><span className={styles.listItem}>Pod:</span>cache-server</h2>
            <ul className='barlow xs regular'>
              <li><span className={styles.listItem}>Containers:</span>1</li>
              <li><span className={styles.listItem}>Last Restart:</span>Sunday, Jan 07 2024 @ 01:22:02am</li>
              <li><span className={styles.listItem}>Last Restarted by:</span>Ashe McAtee</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.nodeContainer}>
        <h1 className={`${styles.h1} poppins lg regular`}><span className={styles.listItem}>Node Name:</span>node-2</h1>
        <div className={`${styles.podCardsContainer} barlow m regular`}>
          <div className={styles.podCard}>
          <h2 className='barlow ml medium'><span className={styles.listItem}>Pod:</span>nodejs-app</h2>
            <ul className='barlow xs regular'>
              <li><span className={styles.listItem}>Containers:</span>3</li>
              <li><span className={styles.listItem}>Last Restart:</span>Yesterday, Jan 09 2024 @ 02:47:10am</li>
              <li><span className={styles.listItem}>Last Restarted by:</span>--</li>
            </ul>
          </div>
          <div className={styles.podCard}>
          <h2 className='barlow ml medium'><span className={styles.listItem}>Pod:</span>mongodb-database</h2>
            <ul className='barlow xs regular'>
              <li><span className={styles.listItem}>Containers:</span>1</li>
              <li><span className={styles.listItem}>Last Restart:</span>Yesterday, Jan 09 2024 @ 04:44:10pm</li>
              <li><span className={styles.listItem}>Last Restarted by:</span>Jeremy Kay</li>
            </ul>
          </div>
          <div className={styles.podCard}>
          <h2 className='barlow ml medium'><span className={styles.listItem}>Pod:</span>mongo-express</h2>
            <ul className='barlow xs regular'>
              <li><span className={styles.listItem}>Containers:</span>1</li>
              <li><span className={styles.listItem}>Last Restart:</span>Today, Jan 10 2024 @ 06:39:58pm</li>
              <li><span className={styles.listItem}>Last Restarted by:</span>--</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.addNode}>
        <button className='btn-1'>+ Add Node</button>
      </div>

    </main>
  );
};
