import React from "react";

import styles from "./Services.module.css";
import { getImageUrl } from "../../utils/utils";
import skills from "../../data/skills.json"; // import skills data

export const Services = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}>My Services</h2>

      <div className={styles.content}>
        {/* About Items */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Development</h3>
              <p>
                I build dynamic and responsive web applications using Java, HTML and CSS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Database Design & Management</h3>
              <p>
                I handle backend databases using MySQL and MongoDB, ensuring efficient data storage, retrieval, and manipulation.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I design intuitive and visually appealing interfaces using Figma focusing on user-first experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
