import Image from "next/image";
import React from "react";
import styles from "../styles/foodmenu.module.css";

interface foodItemList {
  foodImg: string;
  name: string;
  time: string;
  calories: number;
}

const FoodListItem = ({ foodImg, name, time, calories }: foodItemList) => {
  return (
    <div className={styles.foodItemList}>
      <div className={styles.foodImgStyle}>
        <div className={styles.foodImgDiv}>
          <Image
            src={"/" + foodImg}
            height={60}
            width={60}
            objectFit="cover"
            alt="food"
          />
        </div>
        <div>
          <div className={styles.foodName}>
            {name}
          </div>
          <div className={styles.foodTime}>
            <span className={styles.foodTimeDot} />
            {time}
          </div>
        </div>
      </div>
      <div className={styles.foodCalLayout}>
        <div className={styles.foodCalories}>
          {calories} Kal
        </div>
        <span className={styles.foodCalAdd}>+</span>
      </div>
    </div>
  );
};

export default FoodListItem;
