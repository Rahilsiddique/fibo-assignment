import React from "react";
import data from "../json/data.json";
import FoodListItem from "./FoodListItem";
import styles from "../styles/foodmenu.module.css";

const FoodList = () => {
  return (
    <div>
      {data.map((e: any) =>
        <div className={styles.foodList}>
          <div className={styles.foodTitles}>
            <div className={styles.foodType}>
              {e.foodType}
            </div>
            <div className={styles.foodOrigin}>
              {e.foodOrigin}
            </div>
          </div>
          <div className={styles.foodItemListLayout}>
            {e.availableFood.map((food: any) => <FoodListItem {...food} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodList;
