import React, { memo } from 'react';
import styles from './index.css';

export default memo(() => {
  return (
    <div>
      <h1 className={styles.normal}>您好</h1>
    </div>
  );
})
