import Image from "next/image";
import styles from "./customComponent.module.css";
const Loading = () => {
  return (
    <>
      <div className={styles.loadingDiv}>
        <Image
          src="/loading.svg"
          alt="loading.."
          fill
          className={styles.loading}
        />
        <div className={styles.loadingText}>
          <h2>Please Wait ..</h2>
        </div>
      </div>
    </>
  );
};

export default Loading;
