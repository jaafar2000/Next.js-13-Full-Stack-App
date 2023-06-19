import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <div className={styles.container}>{text}</div>
    </Link>
  );
};

export default Button;
