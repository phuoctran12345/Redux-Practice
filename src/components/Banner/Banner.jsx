import React from 'react';
import styles from './Banner.module.css';

export default function Banner({ title }) {
  return (
    <div className={styles.banner}>
      <h1>{title}</h1>
    </div>
  );
}