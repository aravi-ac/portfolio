import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {/* <Image src={} width={100} height={100} alt="about me" layout="responsive" /> */}
      </div>
      <div className={styles.right}>
        <h2 className={styles.about_title}>
          I’m Will, design fanatic, surfer and dog dad.
        </h2>
        <p className={styles.about_desc}>
          I do a lot of things but I specialize in helping businesses create
          better user experiences. Over the past 6 years, I've worked with a
          diverse range of clients, from startups to Fortune 500 companies.
        </p>
      </div>
    </div>
  );
};

export default About;
