import React from 'react';
import '../styles.css';
import { Grid } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '200px',
      }}
    >
      <Grid />
    </div>
  );
};
