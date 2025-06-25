import React from "react";

import styles from "./About.module.css";


import { getImageUrl } from "../../utils/utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        {/* About Items */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>Short Personal Profile</h3><br></br>
              <p>
              I'm an enthusiastic and passionate computer science undergraduate with skills in Java, SpringBoot, HTML, CSS, SQL,MongoDB and aslo interested in Data Analysis and Data Science . I am seeking internship opportunities in a collaborative tech environment.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>BSc (hons) Computer Science</h3><br></br>
              <p>
              University of Westminster (IIT)<br></br>
              2023 - Present<br></br>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>GCE A/L and O/L</h3><br></br>
              <p>
                Bandaranayake College Gampaha<br></br>2018 & 2022<br></br>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Computer Hardware Certificate Course</h3><br></br>
              <p>
                University Of Kelaniya<br></br>2019<br></br>
              </p>
            </div>
          </li>
        </ul>

        
      </div>
    </section>
  );
};