import React, { useState } from "react";
import { languageIcon } from "../../assets";
import { NavLinks } from "../../components";
import useInnerWidth from "../../hooks/useInnerWidth";
import NavLinksTablet from "../NavLinks/NavLinksTablet";
import MenuOrXIcon from "./MenuOrXIcon";
import { LogButtonCtn } from "../../components";
import styles from "./NavbarStyle.module.scss";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const innerWidth = useInnerWidth();

  return (
    <header>
      <nav>
        <div className={styles.logoAndButtonsCtn}>
          <a href="#" className={`${styles.logo} ${styles.link}`}>
            logo
          </a>

          {innerWidth > 768 && <NavLinksTablet />}
          {innerWidth > 768  && <LogButtonCtn language={"EN"} />}

          {innerWidth <= 768  && (
            <div className={styles.buttons}>
              <div className={styles.languageIcon} onClick={() => {}}>
                <img alt="" src={languageIcon} />
              </div>
              <MenuOrXIcon isActive={isActive} setIsActive={setIsActive} />
            </div>
          )}
        </div>
        {isActive && innerWidth <= 768  && (
          <div className={styles.mobileMenuCtn}>
            <NavLinks setIsActive={setIsActive} />
          </div>
        )}
        {isActive && innerWidth <= 768  && (
          <div>
            <button className={styles.logInBtn}>LOG IN</button>
            <button className={styles.signUpBtn}>SIGN UP</button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
