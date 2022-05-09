import React from "react";
import styles from "./Contact.module.css";
import Image from "next/image";

const socialLinks = [
  {
    icon: "/static/icons/facebook.svg",
    url: "#",
  },
  {
    icon: "/static/icons/twitter.svg",
    url: "#",
  },
  {
    icon: "/static/icons/instagram.svg",
    url: "#",
  },
  {
    icon: "/static/icons/web_browser.svg",
    url: "#",
  },
  {
    icon: "/static/icons/linked_in.svg",
    url: "#",
  },
];

const Contact = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.left}>
        <h1>Let’s start a project together.</h1>
        <section className={styles.section}>
          <h6>Email me</h6>
          <h4>aravi48272@gmail.com</h4>
        </section>
      </div>
      <div className={styles.right}>
        <section className={styles.services}>
          <label>services</label>
          <div className={styles.list}>
            <p>seo - optimization</p>
            <p>web design</p>
            <p>mobile design</p>
            <p>web development</p>
            <p>Api development</p>
          </div>
        </section>
        <address className={styles.address}>
          <label>address</label>
          Aravinthraj A,
          <br /> Mathikrishanapuram, mullodai,
          <br /> pondicherry
          <br /> 607402.
        </address>
        <section className={styles.social_links}>
          <label>Social links</label>
          <nav className={styles.social_nav}>
            {socialLinks.map((item, key) => (
              <a key={key}>
                <Image
                  src={item?.icon}
                  width={25}
                  height={25}
                  layout="fixed"
                  alt=""
                />
              </a>
            ))}
          </nav>
        </section>
      </div>
    </footer>
  );
};

export default Contact;
