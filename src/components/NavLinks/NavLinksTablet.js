import React from "react";
import styles from "./NavLinksStyle.module.scss";

export default function NavLinksTablet() {
  return (
    <div className={styles.navlinksCtn}>
      <a href="#" className={styles.link} >About us</a>
      <a href="#" className={styles.link} >Brands</a>
      <a href="#" className={styles.link} >Commissions</a>
      <a href="#" className={styles.link} >News</a>
      <a href="#" className={styles.link} >Contact us</a>
      <a href="#" className={styles.link} >Careers</a>
    </div>
  );
}