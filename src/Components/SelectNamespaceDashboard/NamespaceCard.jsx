import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './SelectNamespaceDashboard.module.scss';

export default function NamespaceCard(props) {
  const navigate = useNavigate();
  const goToPod = () => {
    navigate('/pod-dashboard');
  };

  return (
    <div className={styles.namespaceCard} onClick={goToPod}>
      <h2 className='barlow ml medium'>
        <span className={styles.listItem}>{props.namespace}</span>
      </h2>
    </div>
  );
}
