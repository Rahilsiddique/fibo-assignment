import React from "react";
import styles from "../styles/coupan.module.css";
import Image from "next/image";

interface coupanType {
  type: string;
  price: number;
  offer: string;
}

const CoupanList = ({ type, price, offer }: coupanType) => {
  return (
    <div className={styles.coupanItem}>
      <div className={styles.itemType}>
        {type}
      </div>
      <div className={styles.itemPrice}>
        ₹
        {price}/-
      </div>
      <div className={styles.itemOffer}>
        <Image src="/Discount.svg" height={12} width={12} alt="offer" />
        {offer}
      </div>
    </div>
  );
};

export default CoupanList;
