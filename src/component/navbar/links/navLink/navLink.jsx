"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
const NavLink = ({ item, setOpen }) => {
  const pathName = usePathname();
  return (
    <>
      <Link
        href={item.path}
        key={item.title}
        className={`${styles.container} ${
          pathName === item.path && styles.active
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {item.title}
      </Link>
    </>
  );
};
export default NavLink;
