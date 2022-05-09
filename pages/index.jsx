import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Career from "components/Career";
import Projects from "components/Projects";
import About from "components/About";
import Contact from "components/Contact";

const Landing = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className="">
          <h1 className={styles.welcome}>
            Hi! I’m Will. I design interfaces that inspire users.
          </h1>
          <p className={styles.welcome_desc}>
            I’m Will Burner, a product designer based in Berlin. I create
            user-friendly interfaces for fast-growing startups.
          </p>
          <button className={styles.book_a_call}>
            Book a call
            <Image
              src="/static/icons/north_east.svg"
              layout="fixed"
              width="25"
              height="25"
              alt=""
            />
          </button>
          <div className={styles.overall_rating}>
            <Image
              src="/static/icons/star_black.svg"
              layout="fixed"
              width="25"
              height="25"
              alt=""
            />
            <h5>
              Excellent <span>4.9 out of 5</span>
            </h5>
          </div>
        </div>
        <div className="">
          <Image
            src="/static/images/portfo.png"
            width={100}
            height={100}
            alt="aravi"
            layout="responsive"
          />
        </div>
      </div>
      <Career />
      <Projects />
      <About />
      <Contact />
    </main>
  );
};

export default Landing;
