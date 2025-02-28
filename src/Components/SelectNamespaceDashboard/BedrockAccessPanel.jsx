import React, { useEffect } from 'react';
import * as styles from './SelectNamespaceDashboard.module.scss';

export default function BedrockAccessPanel(props) {
  return (
    <div
      className={styles.namespaceCard} //temporarily matching namespaceCard
    >
      <h2 className='barlow ml medium'>
        <span className={styles.listItem}>Bedrock Access Panel</span>
      </h2>
      <button>Click for Claude Haiku Review of Logs</button>
    </div>
  );
}
