import MidSection from "@/component/Home/MidSection";
import styles from "./page.module.css";
import Banner from "@/component/Home/Banner";
export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <MidSection/>
    </main>
  );
}
