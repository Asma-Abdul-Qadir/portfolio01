"use client";
import Image from "next/image";
import styles from "./Components/Home.module.css"; 
import Header from "./components/Header";
import { Typewriter } from "react-simple-typewriter";
import Head from "next/head";
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Welcome to Asma&apos;s Portfolio</title>
        <meta 
          name="description" 
          content="Asma&apos;s personal portfolio showcasing web development and UI/UX design skills." 
        />
      </Head>
      <Header />
      <section className={styles.hero}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            Hello, I am Asma! <br />
            <span>
              <Typewriter
                words={["Web Developer", "UI/UX Designer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className={styles.paragraph}>
            I specialize in frontend development and UI/UX design.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/heropic.jpg" 
            alt="Asma"
            width={500}
            height={500}
            className={styles.heroImage}
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
