import Links from "./links/Links";
import Image from "next/image";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/Logo.png" alt="Logo" fill className={styles.img} />
        </div>
        <div>
          <Links />
        </div>
      </div>
    </>
  );
};
export default Navbar;
