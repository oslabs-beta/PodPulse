import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as styles from './SelectPodDashboard.module.scss';
import PodCard from './PodCard';
import { nanoid } from 'nanoid';

export default function SelectPodDashboard() {
  const location = useLocation();
  const { namespace } = location.state || {};

  const [namespaceState, setNamespaceState] = useState({ PODS: [] });

  console.log('namespace', namespace);
  ///attempting to view namespace console.log
  const navigate = useNavigate();
  const goToPod = () => {
    navigate('/pod-dashboard');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/getNamespaceState/${namespace}/`);
        const data = await response.json();
        console.log('namespace object data from fetch:', data);
        setNamespaceState(data);
      } catch (error) {
        console.log('Error when fetching namespaceState:', error);
      }
    };
    fetchData();
  }, []);

  console.log('state = ', namespaceState);
  const podCards = namespaceState.PODS.map((pod) => {
    return <PodCard key={nanoid()} pod={pod} />;
  });

  return (
    <main className={styles.main}>
      <div className={styles.namespace}>
        <h1 className={`${styles.h1} poppins lg regular`}>
          <span className={styles.listItem}>Namespace Name:</span>default
        </h1>
        <div className={`${styles.podCardsContainer} barlow m regular`}>
          {podCards}
        </div>
      </div>

      <div className={styles.addNode}>
        <button className='btn-1'>+ Add Node</button>
      </div>
    </main>
  );
}
