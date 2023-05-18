import styles from "../styles/page.module.css";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className={styles.bg}>
      <Profile />
    </main>
  );
}
