import styles from "./text.module.css";

const Text = ({ itemHead, links }) => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.head}>
          <h3>{itemHead}</h3>
        </div>
        <div className={styles.text}>
          {links.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Text;
