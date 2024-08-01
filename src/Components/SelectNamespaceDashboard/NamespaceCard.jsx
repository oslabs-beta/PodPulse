import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './SelectNamespaceDashboard.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrentNamespace } from '../../features/namespaceSlice';

export default function NamespaceCard(props) {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const navigate = useNavigate();
  //   const goToPod = (namespace) => {
  //     navigate(`/select-pod-dashboard`, {
  //       state: { namespace: `${namespace}` },
  //     });
  //   };
  // }, []);
  const navigate = useNavigate();
  const goToPod = () => {
    console.log('clicked namespace card');
    navigate(`/select-pod-dashboard`);
  };

  return (
    <div
      className={styles.namespaceCard}
      onClick={() => { 
        console.log('NAME CARD SENDING: ', props.namespace);
        dispatch(setCurrentNamespace(props.namespace));
        window.localStorage['currentNamespace'] = props.namespace;
        goToPod();
      }}
    >
      <h2 className='barlow ml medium'>
        <span className={styles.listItem}>{props.namespace}</span>
      </h2>
    </div>
  );
}
