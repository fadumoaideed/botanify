/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Plant } from '../../types/plant';
import styles from './card.module.css';
export const Card = ({ name, image }: Plant) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt="alt" />
      <div className={styles.cardDetails}>
        <div className={styles.name}>{name}</div>
      </div>
    </div>
  );
};

// function LightLevel({ light }) {
//   return <FontAwesomeIcon icon={faSun} color="#909192" height={'30px'} />;
// }
