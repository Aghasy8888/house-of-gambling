import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { planetIcon } from "../../assets";
import styles from "./LogButtonCtnStyle.module.scss";
import useInnerWidth from "../../hooks/useInnerWidth";

export default function LogButtonCtn({ language }) {
  const innerWidth = useInnerWidth();

  return (
    <div className={styles.logButtonsCtn}>
      <div className={styles.languageButton}>
        <img alt="" src={planetIcon} className={styles.planetIcon} />
        {innerWidth > 1170 && <div>{language}</div>}
      </div>
      <button className={styles.loginBtn}>
        <div>
          {innerWidth <= 1170 ? (
            <FontAwesomeIcon icon={faRightToBracket} />
          ) : (
            "LOG IN"
          )}
        </div>
      </button>
      <button className={styles.signUpBtn}>
        <div>
          {innerWidth <= 1170 ? (
            <FontAwesomeIcon icon={faUserPlus} />
          ) : (
            "SIGN UP"
          )}
        </div>
      </button>
    </div>
  );
}
