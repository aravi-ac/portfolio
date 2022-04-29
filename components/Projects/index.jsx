import React from "react";
import styles from "./Projects.module.css";
import Image from "next/image";

const Projects = () => {
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
      {/* <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.row}>
            <div>
              <div className={styles.icons}>
                <Image
                  src="/static/icons/north_east.svg"
                  width={25}
                  height={25}
                  layout="fixed"
                  alt="icons"
                />
              </div>
            </div>
            <div className={styles.detail}>
              <h6>Research</h6>
              <p>
                I deep dive into your industry, your audience and your product.
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <div className={styles.icons}>
                <Image
                  src="/static/icons/north_east.svg"
                  width={25}
                  height={25}
                  layout="fixed"
                  alt="icons"
                />
              </div>
            </div>
            <div className={styles.detail}>
              <h6>Research</h6>
              <p>
                I deep dive into your industry, your audience and your product.
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <div className={styles.icons}>
                <Image
                  src="/static/icons/north_east.svg"
                  width={25}
                  height={25}
                  layout="fixed"
                  alt="icons"
                />
              </div>
            </div>
            <div className={styles.detail}>
              <h6>Research</h6>
              <p>
                I deep dive into your industry, your audience and your product.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className=""></div>
          <div className={styles.display}></div>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
