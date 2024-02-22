"use client";
import Link from "next/link";
import styles from "./links.module.css";
const Links = ({ itemHead, links }) => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.head}>
          <h3>{itemHead}</h3>
        </div>
        <div className={styles.link}>
          {links.map((item) => (
            <Link key={item.id} href={item.path} className={styles.singleLink}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Links;
