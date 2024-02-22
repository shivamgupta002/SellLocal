import styles from "./footer.module.css";
import Links from "./links/Links";
import Text from "./text/Text";

const subscribe = [
  {
    id: 1,
    title: "Subscribe",
  },
  {
    id: 2,
    title: "Get 10% off your first order",
  },
];

const supportLink = [
  {
    id: 1,
    title: "Near kotak Mahindra Bank, Khairthal(Rajasthan),301404",
  },
  {
    id: 2,
    title: "20shivamgupta02@gmail.com",
  },
  {
    id: 3,
    title: "+91 9929090937",
  },
];

const account = [
  {
    id: 1,
    title: "My Account",
    path: "/about",
  },
  {
    id: 2,
    title: "Login/Register",
    path: "/about",
  },
  {
    id: 3,
    title: "Cart",
    path: "/about",
  },
  {
    id: 4,
    title: "Wishlist",
    path: "/about",
  },
  {
    id: 5,
    title: "Shop",
    path: "/about",
  },
];

const quickLink = [
  {
    id: 1,
    title: "Privacy Policy",
  },
  {
    id: 2,
    title: "Terms of Use",
  },
  {
    id: 3,
    title: "FAQ",
  },
  {
    id: 4,
    title: "Contact",
  },
];

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.column}>
          <Text itemHead="Sell Local" links={subscribe} />
          <Text itemHead="Support" links={supportLink} />
          <Links itemHead="Account" links={account} />
          <Text itemHead="Quick Use" links={quickLink} />
        </div>
        <div>@copy rights reserved 2024 by @Sell Local</div>
      </div>
    </>
  );
};

export default Footer;
