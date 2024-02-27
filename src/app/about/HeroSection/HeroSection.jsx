import Image from "next/image";
import styles from "./heroSection.module.css";

const HeroSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2>Our Story</h2>
          <p>
            Inspired by the success of platforms like Amazon, we are thrilled to
            introduce Sell local, a revolutionary project dedicated to enhancing
            local markets and making internet selling and buying accessible to
            alt. Our mission is simple to connect local sellers with online
            buyers while ensuring the price affordability for a wider reach.
          </p>
          <p>
            Imagine accessing all products directly from local vendors in your
            city, all through a user-friendly app to your door step.With Sell
            Local, you con browse a diverse range of items, from everyday
            essentials to handcrafted treasures, at comparatively low prices.
            Our platform empowers entrepreneurs ond small business to show case
            their product to a wider audience.
          </p>
          <p>
            We are excited to present SellLocal a transformative initiative that
            aims at enhancing local markets and making internet selling more
            inclusive, following the success of platforms like Amazon. Our goal
            is simple enabling inexpensive prices that can reach many people, by
            bringing together local seller with online buyers.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.heroSection}>
            <Image
              src="/Image/about1.jpg"
              alt="about"
              layout="fill"
              className={styles.imageHover}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
