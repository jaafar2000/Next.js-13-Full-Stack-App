import React from 'react'
import styles from './page.module.css'
import Link from "next/link";

const Protfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle} >Our Work</h1>
      <h2 className={styles.selectTitle}>Choose a gallery</h2>
      <div className={styles.items}>
        <Link href="/protfolio/illustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/protfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/protfolio/application" className={styles.item}>
          <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>  )
}

export default Protfolio