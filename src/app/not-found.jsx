"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./customComponent.module.css";
const NotFound = () => {
  return (
    <>
      <div className={styles.loadingDiv}>
        <Image
          src="/NotFound.svg"
          alt="loading.."
          fill
          className={styles.loading}
        />
      </div>
      <div className={styles.returnLink}>
        <h3>Return to Home page</h3>
        <Link href="/" className={styles.link}>Click here</Link>
      </div>
    </>
  );
};

export default NotFound;
