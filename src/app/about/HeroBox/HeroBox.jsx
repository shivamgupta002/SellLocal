import styles from "./HeroBox.module.css";

const HeroBox = ({ icon: Icon, digit, desc }) => {
  return (
    <div className={styles.box}>
      <div className={styles.iconBox}>
        <Icon className={styles.icon}/>
      </div>
      <h2 className={styles.heading}>{digit}</h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

export default HeroBox;
