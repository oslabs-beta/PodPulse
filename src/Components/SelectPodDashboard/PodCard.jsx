import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './SelectPodDashboard.module.scss';

export default function PodCard(props) {
  // const navigate = useNavigate();
  // const goToPod = (namespace) => {
  //   console.log('clicked namespace card');
  //   navigate(`/select-pod-dashboard`, {
  //     state: { namespace: `${namespace}` },
  //   });
  // };

  return (
    <div
      className={styles.podCard}
      // onClick={() => goToPod(props.namespace)}
    >
      <h2 className='barlow ml medium'>
        <span className={styles.listItem}>{props.pod.POD_NAME}</span>
      </h2>
          <ul className='barlow xs regular'>
            <li>
              <span className={styles.listItem}># of Containers:</span> {props.pod.CONTAINERS.length}
            </li>
          </ul>
    </div>
  );
}
