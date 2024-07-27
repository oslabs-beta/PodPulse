import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as styles from './SelectPodDashboard.module.scss';
import PodCard from './PodCard';
import { nanoid } from 'nanoid';
import  {getNamespace } from '../../features/namespaceSlice';
import { useDispatch, useSelector, useStore } from 'react-redux';

export default function SelectPodDashboard() {
  // const location = useLocation();
  const store = useStore();
  const shouldRun = useRef(true);
  const namespaceState = useSelector(state=>state.namespace.namespaceState);
  const status = useSelector(state=>state.namespace.status);
  const dispatch = useDispatch();
  let currentNamespace = useSelector(state=>state.namespace.currentNamespace);
  // const [namespaceState, setNamespaceState] = useState({ PODS: [] });
  if(window.localStorage['currentNamespace'])currentNamespace = window.localStorage.getItem('currentNamespace');
  if(!namespaceState) status = 'idle';

  console.log('NAMESPACE FROM CARD: ',  currentNamespace);
  console.log('STATUS BEG: ',status);
  ///attempting to view namespace console.log
  // const fetchData = async () => {
  //   try {
  //     document.getElementById('JAT-container').style.display = 'block';
  //     const response = await fetch(`/getNamespaceState/${namespace}/`);
  //     const data = await response.json();
  //     console.log('namespace object data from fetch:', data);
  //     setNamespaceState(data);
  //     document.getElementById('JAT-container').style.display = 'none';
  //   } catch (error) {
  //     console.log('Error when fetching namespaceState:', error);
  //   }
  // };
  useEffect(() => {
    // if (shouldRun.current) {
    if(status == 'idle')
    {
      console.log('DISPATCHING!!!');
      dispatch(getNamespace(currentNamespace));
    }
    // }
    // shouldRun.current = false;
  }, [status]);


  console.log('state = ', namespaceState);
  let podCards
  if(status == 'DONE'){
    console.log('STATUS: ', status);
    podCards = namespaceState.PODS.map((pod) => {
    return <PodCard key={nanoid()} pod={pod} />;
  });
  }
else{podCards = 'Loading...'};

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
