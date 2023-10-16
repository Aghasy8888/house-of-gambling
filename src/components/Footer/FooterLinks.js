import React from "react";
import styles from "./FooterStyle.module.scss";

export default function FooterLinks() {
  return (
    <div className={styles.linksCtn}>
      <a href="#" className={styles.link}>
        Terms & Conditions
      </a>
      <a href="#" className={styles.link}>
        Cookies
      </a>
      <a href="#" className={styles.link}>
        Contacts
      </a>
      <a href="#" className={styles.link}>
        Careers
      </a>
      <a href="#" className={styles.link}>
        Brand Guide
      </a>
    </div>
  );
}
