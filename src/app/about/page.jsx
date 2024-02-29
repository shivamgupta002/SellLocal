import styles from "./about.module.css";
import HeroSection from "./HeroSection/HeroSection";
import HeroBox from "./HeroBox/HeroBox";
import AboutMe from "./AboutMe/AboutMe";
// ------------ icons ----------------
import StoreIcon from "@mui/icons-material/Store";
import PaidIcon from "@mui/icons-material/Paid";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import AboutServices from "./AboutServices/AboutServices";
// title add
export const metadata = {
  title: "About-Sell Local",
  description:
    "About Sell LocalServices - we sell product in cheap price from other e-commerce platforms and about its founder,its services",
};
const About = () => {
  return (
    <>
      {/* About Product */}
      <div className={styles.margin}>
        <HeroSection />
      </div>

      {/* About Site Situation */}
      <div className={styles.margin}>
        <div className={styles.box}>
          <HeroBox
            icon={StoreIcon}
            digit="10.5k"
            desc="Sellers active our site"
          />
          <HeroBox icon={PaidIcon} digit="33k" desc="Monthly Product Sale" />
          <HeroBox
            icon={CoPresentIcon}
            digit="45.5k"
            desc="Customer active in our site"
          />
          <HeroBox
            icon={AccountBalanceWalletIcon}
            digit="25k"
            desc="Annual gross sale"
          />
        </div>
      </div>

      {/* About Me */}
      <div className={styles.margin}>
        <div className="d-flex justify-content-center">
          <AboutMe />
        </div>
      </div>

      {/* About Our Services */}
      <div className={styles.margin}>
        <div className={styles.box}>
          <AboutServices
            icon={LocalShippingIcon}
            heading="free and fast delivery"
            desc="Free delivery for all orders above $50"
          />
          <AboutServices
            icon={SupportAgentIcon}
            heading="24/7 customer service"
            desc="Customer active in our site"
          />
          <AboutServices
            icon={AssuredWorkloadIcon}
            heading="money back guarantee"
            desc="We return your money within 2-3 days"
          />
        </div>
      </div>
    </>
  );
};

export default About;
