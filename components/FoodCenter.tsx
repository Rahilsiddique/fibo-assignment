import React from "react";
import styles from "../styles/profile.module.css";
import Image from "next/image";
import FoodMenu from "./FoodMenu";

const FoodCenter = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileInfo}>
        <div className={styles.profileFoto}>
          <Image
            src="/profile-pic.png"
            alt="profile pic"
            height={50}
            width={50}
          />
        </div>
        <div className={styles.profileTitles}>
          <div className={styles.nameCenter}>Rahil Center</div>
          <div className={styles.nameTitle}>Food Influencer</div>
        </div>
      </div>
      <div className={styles.shadow}>
        <FoodMenu />
      </div>
    </div>
  );
};

export default FoodCenter;
