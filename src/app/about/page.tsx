"use client";
import React from 'react';
import styles from "./about.module.css";
import Head from "next/head";
import Image from "next/image";
import profilepic from "../../../public/heropic.jpg";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Head>
        <title>About Me | Asma's Portfolio</title>
        <meta name="description" content="Learn more about Asma, a passionate Web Developer and UI/UX Designer." />
        <meta name="keywords" content="Asma, Web Developer, UI/UX Designer, Portfolio, Frontend Developer" />
        <meta name="author" content="Asma" />
      </Head>

      {/* About Me Section */}
      <section className={styles.aboutSection}>
        <h2 className={styles.aboutHeading}>About Me</h2>
        
        <div className={styles.contentWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src={profilepic}
              alt="Asma"
              width={250}
              height={250}
              className={styles.profileImage}
            />
          </div>
          
          <div className={styles.textContainer}>
            <p className={styles.aboutText}>
              Hello! I’m Asma, a web developer and UI/UX designer with a passion for creating
              beautiful and functional digital experiences. With a strong foundation in frontend
              development and a keen eye for design, I strive to bring ideas to life in a way
              that is both aesthetically pleasing and user-friendly.
            </p>
            <p className={styles.aboutText}>
              My journey in tech has allowed me to work on various exciting projects, blending creativity with technical expertise. Whether it’s building responsive web applications or designing user-centered interfaces, I am always eager to take on new challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.educationSection}>
        <h2 className={styles.sectionHeading}>Education</h2>
        <ul className={styles.educationList}>
          <li className={styles.educationItem}>
            <h3>SSC (Secondary School Certificate)</h3>
            
          </li>
          <li className={styles.educationItem}>
            <h3>HSC (pre-medical) (Higher Secondary Certificate)</h3>
            
          </li>
          <li className={styles.educationItem}>
            <h3>BSC (Bachelor of Science)</h3>
            
          </li>
          
        </ul>
      </section>

      {/* Certifications Section */}
      <section className={styles.certificationsSection}>
        <h2 className={styles.sectionHeading}>Certifications</h2>
        <ul className={styles.certificationList}>
          <li className={styles.certificationItem}>
            <h3>WordPress</h3>
            
          </li>
          <li className={styles.certificationItem}>
            <h3>SEO</h3>
            
          </li>
          <li className={styles.certificationItem}>
            <h3>Digital Marketing</h3>
            
          </li>
          <li className={styles.certificationItem}>
            <h3>Virtual Assistant</h3>
            
          </li>
          <li className={styles.certificationItem}>
            <h3>Communication & Soft Skill</h3>
            
          </li>
          
        </ul>
      </section>
    </div>
  );
};

export default About;
