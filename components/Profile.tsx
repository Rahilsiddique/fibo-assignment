import React from "react";
import styles from "../styles/profile.module.css";
import Image from "next/image";
import FoodCenter from "./FoodCenter";

const Profile = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.imgSpace}>
        <Image
          src="/Vector.svg"
          height={30}
          width={30}
          alt="share"
          className={styles.shareIcon}
        />
      </div>
      <div>
        <FoodCenter />
      </div>
    </div>
  );
};

export default Profile;
