import React from "react";
import Link from "./Link";
import styles from "./NavLinksStyle.module.scss";

export default function NavLinks({ setIsActive }) {
  return (
    <div className={styles.navlinksCtn}>
      <Link setIsActive={setIsActive} content={"About us"} />
      <Link setIsActive={setIsActive} content={"Brands"} />
      <Link setIsActive={setIsActive} content={"Commissions"} />
      <Link setIsActive={setIsActive} content={"News"} />
      <Link setIsActive={setIsActive} content={"Contact us"} />
      <Link setIsActive={setIsActive} content={"Careers"} />
    </div>
  );
}
