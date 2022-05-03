import React from "react";
import styles from "./Projects.module.css";
import Image from "next/image";

const Projects = () => {
  // const arr = new Array
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>Work spanning 40 projects, 14 countries and 6 years.</h3>
        <div className={styles.description}>
          <p>
            Over the past 6 years, I've worked with a diverse range of clients,
            from startups to Fortune 500 companies.
          </p>
          <div className={styles.nav}>
            <div className={styles.icons}>
              <Image
                src="/static/icons/arrow_back.svg"
                width={30}
                height={30}
                alt="nav icon"
                layout="fixed"
              />
            </div>
            <div className={styles.icons}>
              <Image
                src="/static/icons/arrow_forward.svg"
                width={30}
                height={30}
                alt="nav icon"
                layout="fixed"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.display}></div>
        </div>
        <div className={styles.right}>
          {Array(3)
            .fill(null)
            .map((item, key) => (
              <div key={key} className={styles.detail}>
                <h4 className="">Benefits of Portfolio UI Kit</h4>
                <ul className={styles.points}>
                  <li>You’ve been UI Designer for 2+ years.</li>
                  <li>
                    You’ll ensure content strategy and design are perfectly
                    in-sync.
                  </li>
                  <li>Design and implementation of data storage solutions.</li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
