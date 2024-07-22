import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './SelectNamespaceDashboard.module.scss';

export default function NamespaceCard(props) {
  // useEffect(() => {
  //   const navigate = useNavigate();
  //   const goToPod = (namespace) => {
  //     navigate(`/select-pod-dashboard`, {
  //       state: { namespace: `${namespace}` },
  //     });
  //   };
  // }, []);
  const navigate = useNavigate();
  const goToPod = (namespace) => {
    console.log('clicked namespace card');
    navigate(`/select-pod-dashboard`, {
      state: { namespace: `${namespace}` },
    });
  };

  return (
    <div
      className={styles.namespaceCard}
      onClick={() => goToPod(props.namespace)}
    >
      <h2 className='barlow ml medium'>
        <span className={styles.listItem}>{props.namespace}</span>
      </h2>
    </div>
  );
}
