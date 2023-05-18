import Image from "next/image";
import React from "react";
import styles from "../styles/foodmenu.module.css";
import FoodList from "./FoodList";
import Coupan from "./Coupan";
import OrderButton from "./OrderButton";

const FoodMenu = () => {
  return (
    <div className={styles.foodmenu}>
      <div className={styles.icondiv}>
        <Image
          src="Stroke.svg"
          height={20}
          width={20}
          className={styles.icon}
          alt="up-icon"
        />
      </div>
      <div className={styles.foodLayout}>
        <div className={styles.foodCenter}>Food Center</div>
        <FoodList />
      </div>
      <Coupan />
      <OrderButton />
    </div>
  );
};

export default FoodMenu;
