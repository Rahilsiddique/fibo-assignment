import Image from "next/image";
import React from "react";
import styles from "../styles/foodmenu.module.css";

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
        <div>
          {[...Array(20)].map((e: any, i: number) =>
            <h1 key={e}>
              {i}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
