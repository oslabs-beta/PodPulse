import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import * as styles from './SelectNamespaceDashboard.module.scss';

import NamespaceCard from './NamespaceCard';

export default function SelectNamespaceDashboard() {
  const navigate = useNavigate();
  const goToPod = () => {
    navigate('/pod-dashboard');
  };
  const [NamespaceArray, SetNamespaceArray] = useState([]);
  const [NamespaceFormText, SetNamespaceFormText] = useState('');

  function onChangeInputText() {
    const namespaceFormText = document.getElementById('namespaceInput').value;
    SetNamespaceFormText(namespaceFormText);
  }

  //when adding a namespace, check:
  //  is it in the array already?
  //  does it exists in the user's cluster?
  //  then add it to array and send the whole thing back to the db for storage in the user_table
  function onSubmitNamespace() {
    const namespaceFormText = document.getElementById('namespaceInput').value;
    if (NamespaceArray.includes(namespaceFormText)) {
      alert('Namespace already being displayed');
    } else {
      // fetch('/', {
      //   header: {
      //     Accept: 'application/json',
      //     'content-Type': 'application/json',
      //   },
      //   method: 'POST',
      //   body: JSON.stringify({
      //     nameSpace: namespaceForm,
      //   }),
      // })then((response) => {
      // })
      const newNamespaceArray = NamespaceArray;
      newNamespaceArray.push(namespaceFormText);
      SetNamespaceArray(newNamespaceArray);
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
