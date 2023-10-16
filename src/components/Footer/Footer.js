import React from "react";
import SocialMedia from "./SocialMedia";
import FooterLinks from "./FooterLinks";
import styles from "./FooterStyle.module.scss";


function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <FooterLinks />
        <SocialMedia />
      </div>
    </footer>
  );
}

export default Footer;
