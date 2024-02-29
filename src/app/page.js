import styles from "./page.module.css";
import Banner from "@/component/Banner/Banner";
export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
    </main>
  );
}
