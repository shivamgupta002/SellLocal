import styles from "./AboutServices.css";
const AboutServices = ({ icon: Icon, heading, desc }) => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.iconBox}>
          <Icon className={styles.icon} />
        </div>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.desc}>{desc}</p>
      </div>
    </>
  );
};

export default AboutServices;
