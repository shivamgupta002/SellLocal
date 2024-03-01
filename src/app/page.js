import MidSection from "@/component/Home/MidSection";
import styles from "./page.module.css";
import Banner from "@/component/Home/Banner";
const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
export default function Home() {
  return (
    <main className={styles.main}>
      <Component>
        <Banner />
        <MidSection />
      </Component>
    </main>
  );
}
