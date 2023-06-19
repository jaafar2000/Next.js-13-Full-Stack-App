import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          we're here to help you achieve a seamless and visually compelling
          digital experience. Trust us to enhance your digital products with our
          expertise and passion for exceptional design.
        </p>
        <Button text="See our work" url="/protfolio" />

      </div>
      <div className={styles.item}>
        <Image src='/hero.png' width={500} height={500} className={styles.img} />
      </div>
    </div>
  );
}
