"use client";
import React from 'react';
import styles from "./skills.module.css";
import Head from "next/head";

const skills = [
  { name: "HTML", color: "#FF4B4B", icon: "/html.jpeg" },
  { name: "CSS", color: "#4B7BFF", icon: "/css.png" },
  { name: "JavaScript", color: "#FFC107", icon: "/javascript.png" },
  { name: "Next.js", color: "#000000", icon: "/next.svg" },
  { name: "TypeScript", color: "#3178C6", icon: "/typescript.png" },
  // Add more skills as needed
];

const Skill = () => {
  return (
    <div className={styles.skillPage}>
      <Head>
        <title>My Skills | Asma's Portfolio</title>
        <meta name="description" content="Explore the skills and expertise of Asma." />
      </Head>

      <section className={styles.skillSection}>
        <h2 className={styles.skillHeading}>Skills</h2>
        <div className={styles.skillGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillIconContainer}>
                <img
                  src={skill.icon}
                  alt={`Icon representing ${skill.name}`}
                  className={styles.skillIcon}
                  loading="lazy"
                />
                <div
                  className={styles.skillLevelCircle}
                  style={{
                    borderColor: skill.color,
                  }}
                ></div>
              </div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <p className={styles.skillDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, delectus!
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skill;
