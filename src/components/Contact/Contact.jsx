import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils/utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:jayindu16@gmail.com">jayindu16@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://github.com/Jayindu">Jayindu Kandewaththa</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.linkedin.com/in/jayindu-kandewaththa-253ba3266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Jayindu Kandewaththa</a>
        </li>
      </ul>
    </footer>
  );
};
