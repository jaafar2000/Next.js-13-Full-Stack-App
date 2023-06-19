import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container} >
      <div> © All right reserved | 2023 </div>
      <div className={styles.imageContainer} >
      <Image src="/1.png" width={15} className={styles.icon} height={15} alt='1' />
      <Image src="/2.png" width={15} className={styles.icon} height={15} alt='2' />
      <Image src="/3.png" width={15} className={styles.icon} height={15} alt='3' />
      <Image src="/4.png" width={15} className={styles.icon} height={15} alt='4' />
      </div>
    </div>
  )
}

export default Footer