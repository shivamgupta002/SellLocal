import Image from "next/image";
import styles from "./about.module.css"
const About = () => {
  return (
    <>
    <div className={styles.heroSection}>
      <Image
        src="/Image/about1.jpg"
        alt="about"
        fill
        className={styles.aboutTopImage}
      />
      </div>
    </>
  );
};

export default About;
