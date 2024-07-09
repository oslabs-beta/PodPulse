import React from 'react';
import { useState, useEffect } from 'react';
import * as styles from './PodDashboard.module.scss';

export default function PodDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/pods/:pod_id')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  function handleClearLogs(container_id) {
    fetch('/pods/:container_id')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }

  const rows = data.map((row) => {
    <div className={styles.gridRow}>
          <div>{row.container_name}</div>
          <div>{restartRate}</div>
          <div>{row.restart_logs.log_time}</div>
          <div>{row.restart_logs.restarted_by}</div>
          <div><button onClick={() => handleClearLogs(row.id)}>Clear Logs</button></div>
        </div>
  })

  return (
    <main className={styles.main}>

      <h1 className={`${styles.h1} poppins lg regular`}>react-front-end</h1>
      <p className='poppins xxs regular'><span className={styles.listItem}>Full Name:</span>react-front-end-6d4bd87b9-78p2k</p>

      <div className={styles.grid}>
        <div className={`${styles.gridHeader} barlow m regular`}>
          <div>Container</div>
          <div>Restart Rate</div>
          <div>Restart Time</div>
          <div>Last Restarted By</div>
          <div>Clear Logs</div>
        </div>
        <div className={styles.gridRow}>
          {/* {rows} */}
          <div>react-front-end-container</div>
          <div>50</div>
          <div>
            July 12, 2023 - 11:32:20 pm
          </div>
          <div>Pablo Rosillo</div>
          <div>
            <button>Clear Logs</button>
          </div>
        </div>
      </div>

      <div className={styles.addContainer}>
        <button className='btn-1'>+ Add Container</button>
      </div>

    </main>
  )
}
