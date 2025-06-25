import React from "react";
import styles from "./ProjectModal.module.css";
import { getImageUrl } from "../../utils/utils";

export const ProjectModal = ({ project, onClose }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>X</button>
        
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>{skill}</li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};
