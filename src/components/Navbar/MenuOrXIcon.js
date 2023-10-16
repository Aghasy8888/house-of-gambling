import React from 'react';
import styles from "./NavbarStyle.module.scss";
import { menuIcon, xIcon } from '../../assets';

export default function MenuOrXIcon({isActive, setIsActive}) {
    const MenuOrXIconComponent = isActive ? (
        <div className={styles.xIcon} onClick={() => setIsActive(false)}>
          <img alt="" src={xIcon} />
        </div>
      ) : (
        <div
          className={styles.menuIcon}
          onClick={() => setIsActive(true)}
        >
          <img alt="" src={menuIcon} />
        </div>
      );

  return MenuOrXIconComponent;
}
