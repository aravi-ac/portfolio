import React from "react";
import styles from "./Career.module.css";
import Image from "next/image";

const Career = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3>Design that puts your growth on priority</h3>
        <p>
          I’ve spent 15 years building and testing my process. It just works.
          Every time.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className="">
            <div className="">
              <Image
                src="/static/icons/idea.svg"
                width={25}
                height={25}
                layout="fixed"
              />
            </div>
            <div className="">
              <h6>Research</h6>
              <p>
                I deep dive into your industry, your audience and your product.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Career;
