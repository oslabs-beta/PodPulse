import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as styles from './PodContentsDashboard.module.scss';
import RestartTimes from '../RestartTimes/RestartTimes.jsx';
import RestartedBy from '../RestartedBy/RestartedBy.jsx';
import { nanoid } from 'nanoid';
import { getNamespace, setCurrentNamespace, setStatus } from '../../features/namespaceSlice.js';
import { useSelector, useDispatch } from 'react-redux';

export default function PodContentsDashboard() {
    const location = useLocation();
    const { podID } = location.state || {};
    // const [poda, setPod] = useState(pod);
    let status = useSelector(state => state.namespace.status);
    const podState = useSelector(state => state.namespace.namespaceState.PODS);
    let currentNamespace = useSelector(state => state.namespace.currentNamespace);
    const dispatch = useDispatch();
    if (localStorage['currentNamespace']) dispatch(setCurrentNamespace(localStorage.getItem('currentNamespace')));
    if (!podState) dispatch(setStatus('idle'));

    useEffect(() => {
        // if(shouldRun.current){
        if (status == 'idle') {
            console.log('DISPATCHING!!');
            // dispatch(getNamespace('default'));
            resetPods();
        }
        // }
        // shouldRun.current = false;
    }, [status]);

    const resetPods = () => {
        try {
            dispatch(getNamespace(currentNamespace));
        } catch (error) {
            console.log('Error when fetching namespaceState:', error);
        }
    };

    // const [podDashboardData, setPodDashboardData] = useState([]);

    // useEffect(() => {
    //   fetch('/getPods')
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       setPodDashboardData(data.pods[0].containers);
    //     })
    //     .catch((error) => console.error('Error fetching data:', error));
    // }, []);

    // function handleClearLogs(container_db_id) {
    //   fetch(`/pods/:${container_db_id}`, { method: 'PUT' })
    //     .then((response) => response.json())
    //     .then((data) => setData(data))
    //     .catch((error) => console.error('Error fetching data:', error));
    // }

    // Mapping through the fetched containers object to create table rows dynamically
    let rows = '';

    if (status == 'DONE') {
        let pod = {};
        podState.forEach(p => {
            if (p.DB_ID == podID)
                pod = p;
        });

        rows = pod.CONTAINERS.map((container) => {
            return (
                <div className={styles.gridRow} key={nanoid()}>
                    <div>{container.CONTAINER_NAME}</div>
                    <div>Restart Rate!</div>
                    <div>
                        <RestartTimes
                            log_time={container.RESTART_LOGS[0].LOG_TIME}
                            restartLogs={container.RESTART_LOGS}
                            key={nanoid()}
                        />
                    </div>
                    <div>
                        <RestartedBy restartLogs={container.RESTART_LOGS} key={nanoid()} />
                    </div>
                    <div>
                        <button onClick={() => console.log('poof')}>Clear Logs</button>
                    </div>
                </div>
            );
        });
    }

    return (
        <main className={styles.main}>
            <h1 className={`${styles.h1} poppins lg regular`}>
                <span className={styles.podFullName}>Pod Name:</span>
                {/* {poda.POD_NAME} */}
            </h1>
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
                <button className='btn-1' onClick={resetPods}>Refresh</button>
            </div>
        </main>
    );
}

{
    /* <div className={styles.gridRow}>
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
  </div> */
}
