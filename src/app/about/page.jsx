import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.overlay} ></div>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            We are Digital Storytellers, a team dedicated to crafting
            award-winning digital experiences. Our mission is to bring stories
            to life using cutting-edge technology and creative innovation.
            Through web design, UX, and interactive multimedia, we create
            captivating and immersive online experiences that engage audiences.
            Our talented team collaborates closely to deliver high-quality
            solutions, and we have a proven track record with numerous awards
            and recognition.
            <br />
            <br />
            Whether you're a startup or an established brand, we're passionate
            about helping you connect with your audience through unforgettable
            storytelling. Contact us today to discuss your project and let us
            create handcrafted, award-winning digital experiences for you.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            At Digital Storytellers, we specialize in web design, user
            experience (UX) design, interactive multimedia, digital branding,
            content strategy, analytics and optimization. We create visually
            stunning websites, intuitive interfaces, and immersive digital
            experiences.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button text="contact" url="/contact" />
            
        </div>
      </div>
    </div>
  );
};

export default About;
