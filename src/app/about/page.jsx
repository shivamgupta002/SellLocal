import styles from "./about.module.css";
import HeroSection from "./HeroSection/HeroSection";
import HeroBox from "./HeroBox/HeroBox";
import AboutMe from "./AboutMe/AboutMe"
// ------------ icons ----------------
import StoreIcon from '@mui/icons-material/Store';
import PaidIcon from '@mui/icons-material/Paid';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const About = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.box}>
        <HeroBox icon={StoreIcon} digit="10.5k" desc="Sellers active our site" />
        <HeroBox icon={PaidIcon} digit="33k" desc="Monthly Product Sale"/>
        <HeroBox icon={SupportAgentIcon} digit="45.5k" desc="Customer active in our site"/>
        <HeroBox icon={AccountBalanceWalletIcon} digit="25k" desc="Annual gross sale"/>
      </div>
      <div className="d-flex justify-content-center">
      <AboutMe/>
      </div>
    </>
  );
};

export default About;
