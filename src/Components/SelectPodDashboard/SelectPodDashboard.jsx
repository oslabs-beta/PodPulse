import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as styles from './SelectPodDashboard.module.scss';
import PodCard from './PodCard';
import { nanoid } from 'nanoid';

export default function SelectPodDashboard() {
  const location = useLocation();
  const shouldRun = useRef(true);
  const { namespace } = location.state || {};
  const [namespaceState, setNamespaceState] = useState({ PODS: [] });

  console.log('namespace', namespace);
  ///attempting to view namespace console.log
  const fetchData = async () => {
    try {
      document.getElementById('JAT-container').style.display = 'block';
      const response = await fetch(`/getNamespaceState/${namespace}/`);
      const data = await response.json();
      console.log('namespace object data from fetch:', data);
      setNamespaceState(data);
      document.getElementById('JAT-container').style.display = 'none';
    } catch (error) {
      console.log('Error when fetching namespaceState:', error);
    }
  };
  useEffect(() => {
    if (shouldRun.current) {
      fetchData();
    }
    shouldRun.current = false;
  }, []);

  console.log('state = ', namespaceState);
  let podCards
  if(namespaceState.PODS !== undefined)
    {podCards = namespaceState.PODS.map((pod) => {
    return <PodCard key={nanoid()} pod={pod} fetchData={fetchData}/>;
  })};

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
    </main>
  );
}
