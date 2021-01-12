import React, { memo } from 'react';
import styled from './app.css'

export default memo(() => {
  return (
    <div className={styled.header}>
      <h1 className={styled.title}>app_tsx的文件</h1>
      <h2>Lijun更改后rebase</h2>
    </div>
  )
})