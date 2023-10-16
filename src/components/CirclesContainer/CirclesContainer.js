import React from "react";
import { CirclesRowOrColumn } from "../../components";
import {
  world,
  timer,
  soccer,
  soccer_gray,
  shield,
  M_Green,
  M_Gray,
  M_Blue,
  crownWithCtn,
  crown,
  dollarWithCtn,
  world_mobile,
  dollarWithCtnMobile,
} from "../../assets";
import useInnerWidth from "../../hooks/useInnerWidth";

import styles from "./CirclesContainer.module.scss";


function CirclesContainer() {
  const innerWidth = useInnerWidth();

  const leftGroupCircles = [
    innerWidth < 992 ? dollarWithCtnMobile : dollarWithCtn,
    soccer,
    M_Green,
    shield,
    innerWidth < 992 ? dollarWithCtnMobile : dollarWithCtn,
    soccer,
    timer,
    soccer,
  ];

  const middleGroupCircles = [
    M_Gray,
    timer,
    crown,
    innerWidth < 992 ? world_mobile : world,
    M_Gray,
    timer,
    crown,
    M_Gray,
    timer,
  ];

  const rightGroupCircles = [
    innerWidth < 992 ? crown : crownWithCtn,
    M_Blue,
    shield,
    soccer_gray,
    shield,
    crown,
    M_Blue,
    shield,
    M_Blue,
    shield,
  ];

  return (
    <section className={styles.circlesContainer}>
      <div className={styles.container}>
        <CirclesRowOrColumn images={leftGroupCircles} />
        <CirclesRowOrColumn images={middleGroupCircles} />
        <CirclesRowOrColumn images={rightGroupCircles} />
      </div>
    </section>
  );
}

export default CirclesContainer;
