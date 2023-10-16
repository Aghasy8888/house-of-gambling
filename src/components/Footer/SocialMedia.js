import React from "react";
import {
  facebookIcon,
  youtubeIcon,
  tiktokIcon,
  instagramIcon,
  twitterIcon,
  telegramIcon,
  vkIcon,
  linkedInIcon,
} from "../../assets";
import styles from "./FooterStyle.module.scss";

export default function SocialMedia() {
  return (
    <div className={styles.ourSocialMedia}>
      <h3>Our social media:</h3>
      <div className={styles.socialMediaIcons}>
        <a href="#" className={styles.link}>
          <img src={twitterIcon} alt="" />
        </a>
        <a href="#" className={styles.link}>
          <img src={facebookIcon} alt="" />
        </a>
        <a href="#" className={styles.link}>
          <img src={instagramIcon} alt="" />
        </a>
        <a href="#" className={styles.link}>
          <img src={linkedInIcon} alt="" />
        </a>
        <a href="#" className={styles.link}>
          <img src={youtubeIcon} alt="" />
        </a>
        <a href="#" className={styles.link}>
          <img src={tiktokIcon} alt="" />
        </a>
        <a href="#" className={styles.link}>
          <img src={telegramIcon} alt="" />
        </a>
        <a href="#" className={styles.link}>
          <img src={vkIcon} alt="" />
        </a>
      </div>
    </div>
  );
}
