import React from "react";
import styles from "../styles/order.module.css";

const OrderButton = () => {
  return (
    <div className={styles.order}>
      <button className={styles.orderBtn}>Order Now</button>
    </div>
  );
};

export default OrderButton;
