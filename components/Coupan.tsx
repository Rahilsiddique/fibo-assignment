import React from "react";
import styles from "../styles/coupan.module.css";
import offers from "../json/offers.json";
import CoupanList from "./CoupanList";

const Coupan = () => {
  return (
    <div className={styles.coupanLayout}>
      <div className={styles.coupanTitle}>Meals Coupan</div>
      <div className={styles.coupan}>
        <div className={styles.coupanInfo}>
          <span className={styles.coupanDate}>27th JAN - 18th FEB</span>
          <div className={styles.coupanOfferTexts}>
            <span className={styles.coupanOfferText}>UPTO</span>
            <span className={styles.coupanOfferText}>25% OFF</span>
          </div>
        </div>
        {offers.map(e => <CoupanList {...e} />)}
      </div>
    </div>
  );
};

export default Coupan;
