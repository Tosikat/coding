import React, { memo } from 'react';
import styles from './index.css';

export default memo(() => {
  return (
    <div>
      <h1 className={styles.normal}>不太好，tottoko上的分支</h1>
      <h2 className={styles.lijun}>Tosikat_branch</h2>
      <p>给你个p标签</p>
    </div>
  );
})