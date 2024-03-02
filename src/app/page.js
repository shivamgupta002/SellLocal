"use client";
import MidSection from "@/component/Home/MidSection";
import styles from "./page.module.css";
import Banner from "@/component/Home/Banner";
import { Box, styled } from "@mui/material";
// import MidSlide from "@/component/Home/MidSlide";
// import Slide from "@/component/Home/Slide";
const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
export default function Home() {
  return (
    <main className={styles.main}>
      <Component>
        <Banner />
        {/* <MidSlide products={products} title="Deal of the Day" timer={true} /> */}
        {/* <Slide products={products} title="Discounts for You" timer={false} /> */}
        <MidSection />
      </Component>
    </main>
  );
}
