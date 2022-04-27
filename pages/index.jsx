import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <h2>Hi! I’m Will. I design interfaces that inspire users.</h2>
        <p>
          I’m Will Burner, a product designer based in Berlin. I create
          user-friendly interfaces for fast-growing startups.
        </p>
        <button>Book a call</button>
        <div>
          <Image
            src="/icons/star_black.scg"
            layout="fixed"
            width="25"
            height="25"
          />
          <h5>
            Excellent <span>4.9 out of 5</span>
          </h5>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Landing;
