import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils/utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jayindu Kandewaththa</h1>
        <p className={styles.description}>
        I'm a Backend Developer passionate about creating backends for Systems.
        </p>
        <a
  href="/K.W.J.H.D Kandewaththa.pdf"
  className={styles.contactBtn}
  download
  target="_blank"
  rel="noopener noreferrer"
>
  Download CV
</a>

      </div>
      <img
        src={getImageUrl("hero/me.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
