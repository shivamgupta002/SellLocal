import styles from "./page.module.css";
import HeroSection from "../component/heroSection/HeroSection";
// import Navbar from "../component/navbar/Navbar.jsx";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
    </main>
  );
}
