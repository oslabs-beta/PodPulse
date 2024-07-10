import React from 'react';
import { useState, useEffect } from 'react';
import * as styles from './PodDashboard.module.scss';
import RestartTimes from '../RestartTimes/RestartTimes.jsx';
import RestartedBy from '../RestartedBy/RestartedBy.jsx';

export default function PodDashboard() {
  const [podDashboardData, setPodDashboardData] = useState([]);

  useEffect(() => {
    fetch('/getPods')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
  
        console.log("data.container is,", data);
        setPodDashboardData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  function handleClearLogs(container_db_id) {
    fetch(`/pods/:${container_db_id}`, { method: 'PUT' })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }

  const rows = podDashboardData.map((container) => {
    return (
      <div className={styles.gridRow} key={container.container_db_id}>
        <div>{container.container_name}</div>
        <div>Restart Rate!</div>
        <div><RestartTimes log_time={container.restart_logs.log_time} restartLogs={container.restart_logs} key={container.restart_logs.restart_log_db_id}/></div>
        <div>RestartedBy</div>{/* <div><RestartedBy restartLogs={container.restart_logs} key={container.restart_logs.restart_log_db_id}/></div> */}
        <div><button onClick={() => handleClearLogs(container.container_db_id)}>Clear Logs</button></div>
      </div>
    );
  });

  return (
    <main className={styles.main}>

      <h1 className={`${styles.h1} poppins lg regular`}>react-front-end</h1>
      <p className='poppins xxs regular'><span className={styles.podFullName}>Full Name:</span>react-front-end-6d4bd87b9-78p2k</p>

      <div className={`${styles.grid} barlow m regular`}>
        <div className={styles.gridHeader}>
          <div>Container</div>
          <div>Restart Rate</div>
          <div>Time of Restart</div>
          <div>Last Restarted By</div>
          <div>Clear Logs</div>
        </div>
        {rows}
      </div>

      <div className={styles.addContainer}>
        <button className='btn-1'>+ Add Container</button>
      </div>

    </main>
  );
}


{/* <div className={styles.gridRow}>
<div>react-app</div>
<div>12</div>
<div>
  Monday, Jan 08 2023 @ 11:32:20pm
</div>
<div>Pablo Rosillo</div>
<div>
  <button>Clear Logs</button>
</div>
</div>
<div className={styles.gridRow}>
<div>redux store</div>
<div>08</div>
<div>
  Monday, Jan 08 2023 @ 01:02:47am
</div>
<div>--</div>
<div>
  <button>Clear Logs</button>
</div>
</div>
<div className={styles.gridRow}>
<div>nginx-proxy</div>
<div>50</div>
<div>
  Sunday, Jan 07 2023 @ 11:18:01pm
</div>
<div>--</div>
<div>
  <button>Clear Logs</button>
</div>
</div> */}