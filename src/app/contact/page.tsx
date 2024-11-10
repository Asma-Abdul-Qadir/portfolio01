"use client";
import React from 'react';
import styles from "../contact/contact.module.css";
import Head from "next/head";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <Head>
        <title>Contact Me | Asma's Portfolio</title>
        <meta name="description" content="Get in touch with Asma for collaboration or inquiries." />
      </Head>

      <section className={styles.contactSection}>
        <h2 className={styles.contactHeading}>Get In Touch</h2>
        <p className={styles.contactText}>
          I’d love to connect! Whether you have a project, collaboration, or just want to chat, feel free to reach out.
        </p>

        <form className={styles.contactForm} action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <label htmlFor="name" className={styles.formLabel}>Name</label>
          <input type="text" id="name" name="name" required className={styles.formInput} />

          <label htmlFor="email" className={styles.formLabel}>Email</label>
          <input type="email" id="email" name="email" required className={styles.formInput} />

          <label htmlFor="message" className={styles.formLabel}>Message</label>
          <textarea id="message" name="message" required className={styles.formTextarea}></textarea>

          <button type="submit" className={styles.formButton}>Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
