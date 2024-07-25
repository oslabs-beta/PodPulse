import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './SelectPodDashboard.module.scss';

export default function PodCard(props) {
  const navigate = useNavigate();
  // const fetchData = () => {props.fetchData}
  const goToPodDashboard = () => {
    console.log('in pod card', props);
    navigate(`/pod-contents-dashboard`, {
      state: { pod: props.pod
       },
    });
  };

  return (
    <div className={styles.podCard} onClick={goToPodDashboard}>
      <h2 className='barlow ml medium'>
        <span className={styles.listItem}>{props.pod.POD_NAME}</span>
      </h2>
      <ul className='barlow xs regular'>
        <li>
          <span className={styles.listItem}>Containers:</span>{' '}
          {props.pod.CONTAINERS.length}
        </li>
      </ul>
    </div>
  );
}
