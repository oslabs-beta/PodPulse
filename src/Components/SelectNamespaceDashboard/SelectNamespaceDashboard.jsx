import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import * as styles from './SelectNamespaceDashboard.module.scss';

import NamespaceCard from './NamespaceCard';

export default function SelectNamespaceDashboard() {
  const navigate = useNavigate();
  const shouldRun = useRef(true);
  const goToPod = () => {
    navigate('/pod-dashboard');
  };
  const [NamespaceArray, SetNamespaceArray] = useState([]);
  const [NamespaceFormText, SetNamespaceFormText] = useState('');

  useEffect(() => {
    if(shouldRun.current){
    fetch('/getNamespaceList')
      .then((response) => response.json())
      .then((newNamespaceArray) => SetNamespaceArray(newNamespaceArray))
      .catch((error) => console.error('Error fetching data:', error));
  }
  shouldRun.current = false;
}, []);

  function onChangeInputText(e) {
    SetNamespaceFormText(e.target.value);
  }

  //when adding a namespace, check:
  //  is it in the array already?
  //  does it exists in the user's cluster?
  //  then add it to array and send the whole thing back to the db for storage in the user_table
  async function onSubmitNamespace() {
    const namespaceFormText = document.getElementById('namespaceInput').value;
    if (NamespaceArray.includes(namespaceFormText)) {
      alert('Namespace already being displayed');
    } else {
      await fetch(`/initializeNamespace/${namespaceFormText}`);

      const getNamespaceList = await fetch(`/getNamespaceList`);
      const response = await getNamespaceList.json();
      console.log('namespace list after submission = ', response);
      SetNamespaceArray(response);
      SetNamespaceFormText('');
    }
  }
  const namespaceCards = NamespaceArray.map((namespace) => {
    return <NamespaceCard key={nanoid()} namespace={namespace} />;
  });

  return (
    <main className={styles.main}>
      <div className={styles.namespacesContainer}>
        <h1 className={`${styles.h1} poppins lg regular`}>
          <span className={styles.listItem}>Namespaces</span>
        </h1>
        <div className={`${styles.namespaceCardsContainer} barlow m regular`}>
          {namespaceCards}
        </div>
      </div>
      <div className={styles.addNode}>
        <input
          type='text'
          id='namespaceInput'
          placeholder='Add Namespace here'
          onChange={onChangeInputText}
          value={NamespaceFormText}
        />
        <button onClick={onSubmitNamespace}>Add Namespace</button>
      </div>
    </main>
  );
}
