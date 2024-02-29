"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Become a Seller",
    path: "/seller",
  },
  {
    title: "Carrier",
    path: "/carrier",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  //Temporary
  const session = true;
  const isAdmin = true;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          <div className={styles.divLink}>
            <ShoppingCartIcon />
            <NavLink item={{ title: "Cart", path: "/cart" }} />
          </div>
          {session ? (
            <>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{ title: "login", path: "/login" }} />
          )}
        </div>
        <Image
          src="/menu.png"
          alt="hamburger"
          width={30}
          height={30}
          onClick={() => setOpen((prev) => !prev)}
          className={styles.menuButton}
        />
        {open && (
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <NavLink
                item={link}
                key={link.title}
                open={open}
                setOpen={setOpen}
              />
            ))}
            <div className={styles.divLink}>
              <ShoppingCartIcon />
              <NavLink
                item={{ title: "Cart", path: "/cart" }}
                open={open}
                setOpen={setOpen}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Links;
